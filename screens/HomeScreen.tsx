import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { fetchItalianMeals } from '../services/mealsApi';

type MealSummary = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strArea: string,
    strCountry: string
};

type Status = 'idle' | 'loading' | 'success' | 'error';

type State = {
    status: Status;
    items: MealSummary[];
    message: string;
};


export default function HomeScreen() {
    const navigation = useNavigation<any>();

    const [state, setState] = React.useState<State>({
        status: 'idle',
        items: [],
        message: '',
    });

    const loadMeals = async () => {
        try {
            setState({
                status: 'loading',
                items: [],
                message: 'Caricamento piatti',
            });

            const data = await fetchItalianMeals();

            setState({
                status: 'success',
                items: data,
                message: '',
            });
        } catch (error) {
            setState({
                status: 'error',
                items: [],
                message: 'Errore nel caricamento dei piatti',
            });
        }
    };

    React.useEffect(() => {
        loadMeals();
    }, []);

    // Visualizer del caricamento
    if (state.status === 'loading') {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
                <Text>{state.message}</Text>
            </View>
        );
    }

    // Messaggio di errore con bottone per ricaricare
    if (state.status === 'error') {
        return (
            <View style={styles.center}>
                <Text style={{ color: "red" }}>{state.message}</Text>
                <Pressable onPress={loadMeals} style={styles.ErrorButton}>
                    <Text>Riprova</Text>
                </Pressable>
            </View>
        );
    }

    // Successo ma array vuoto
    if (state.status === 'success' && state.items.length === 0) {
        return (
            <View style={styles.center}>
                <Text>Nessun piatto italiano disponibile</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={state.items}
                keyExtractor={(item) => item.idMeal}
                contentContainerStyle={{ padding: 12 }}
                initialNumToRender={state.items.length}
                maxToRenderPerBatch={state.items.length}
                renderItem={({ item }) => (
                    <Pressable style={styles.card} onPress={() => navigation.navigate('MealDetails', { idMeal: item.idMeal, })}>
                        <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                        <Text style={styles.title}>
                            {item.strMeal}
                        </Text>
                    </Pressable>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        marginBottom: 12,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 180,
    },
    title: {
        padding: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    ErrorButton: {
        marginTop: 15,
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 50,
    }
});
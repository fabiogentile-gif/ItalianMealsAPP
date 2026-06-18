import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { fetchItalianMeals } from '../services/mealsApi';

type MealSummary = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strArea: string;
    strCountry: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function HomeScreen() {
    const navigation = useNavigation<any>();

    const [status, setStatus] = React.useState<Status>("idle");
    const [meals, setMeals] = React.useState<MealSummary[]>([]);

    const loadMeals = async () => {
        try {
            setStatus("loading");

            const data = await fetchItalianMeals();
            setMeals(data);
            setStatus("success");
        } catch (error) {
            setStatus("error");

        }
    };

    React.useEffect(() => {
        loadMeals();
    }, []);

    // Visualizer del caricamento
    if (status === 'loading') {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
                <Text>Caricamento piatti</Text>
            </View>
        );
    }

    // Messaggio di errore con bottone per ricaricare
    if (status === 'error') {
        return (
            <View style={styles.center}>
                <Text style={{ color: "red" }}>Errore nel caricare i piatti</Text>
                <Pressable onPress={loadMeals} style={styles.ErrorButton}>
                    <Text>Riprova</Text>
                </Pressable>
            </View>
        );
    }

    // Successo ma array vuoto
    if (status === 'success' && meals.length === 0) {
        return (
            <View style={styles.center}>
                <Text>Nessun piatto italiano disponibile</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                keyExtractor={(item) => item.idMeal}
                contentContainerStyle={{ padding: 12 }}
                initialNumToRender={meals.length}
                maxToRenderPerBatch={meals.length}
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
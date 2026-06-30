import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Pressable } from 'react-native';
import FavoriteButton from '../components/ui/FavoriteButton';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import { fetchItalianMeals } from '../services/mealsApi';
import { useFavorites } from '../context/FavoritesContext';

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

    const { favoriteIds } = useFavorites();
    const [showFavoritesOnly, setShowFavoritesOnly] = React.useState(false);
    const [state, setState] = React.useState<State>({
        status: 'idle',
        items: [],
        message: '',
    });

    const displayedMeals = showFavoritesOnly
        ? state.items.filter(meal => favoriteIds.includes(meal.idMeal))
        : state.items;

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
            <View style={styles.filters}>
                <Pressable onPress={() => setShowFavoritesOnly(false)}>
                    <View style={styles.tab}>
                        <Ionicons name="apps-outline" size={20} />
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600',
                                opacity: showFavoritesOnly ? 0.4 : 1,
                                marginLeft: 6,
                            }}
                        >
                            Tutti
                        </Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => setShowFavoritesOnly(true)}>
                    <View style={styles.tab}>
                        <Ionicons name="heart" size={20} color="red" />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '600',
                            opacity: showFavoritesOnly ? 1 : 0.4
                        }}>
                            Preferiti
                        </Text>
                    </View>

                </Pressable>
            </View>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.idMeal}
                contentContainerStyle={{ padding: 12 }}
                initialNumToRender={state.items.length}
                maxToRenderPerBatch={state.items.length}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate('MealDetails', {idMeal: item.idMeal})}>
                        <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                        <View style={styles.favoriteButton}>
                            <FavoriteButton idMeal={item.idMeal} />
                        </View>
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
        position: 'relative',
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
    },
    favoriteButton: {
        position: 'absolute',
        top: 10,
        right: 10,

        width: 40,
        height: 40,

        borderRadius: 20,
        backgroundColor: 'rgb(255,255,255)',

        justifyContent: 'center',
        alignItems: 'center',

        zIndex: 10,
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
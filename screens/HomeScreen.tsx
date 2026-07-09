import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image, FlatList, ActivityIndicator, Pressable, TextInput, Animated } from 'react-native';
import FavoriteButton from '../components/ui/FavoriteButton';

import { fetchItalianMeals } from '../services/mealsApi';
import { useFavorites } from '../context/FavoritesContext';

import Ionicons from '@react-native-vector-icons/ionicons';
import { createSharedStyles } from "../theme/styles";
import { createHomeStyles } from "../theme/HomeScreen.styles";
import { colors } from '../theme/colors';

import { State } from '../types/meal';

const sharedstyles = createSharedStyles();
const styles = createHomeStyles();


export default function HomeScreen() {
    const navigation = useNavigation<any>();
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    const { favoriteIds } = useFavorites();


    const [showFavoritesOnly, setShowFavoritesOnly] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [state, setState] = React.useState<State>({
        status: 'idle',
        items: [],
        message: '',
    });

    //Mostra i preferiti e la ricerca
    const displayedMeals = state.items.filter((meal) => {
        const matchesFavorites =
            !showFavoritesOnly || favoriteIds.includes(meal.idMeal);

        const matchesSearch = meal.strMeal
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchesFavorites && matchesSearch;
    });


    const loadMeals = async () => {
        try {
            setState({
                status: 'loading',
                items: [],
                message: 'Caricamento piatti',
            });
            fadeAnim.setValue(0);
            const data = await fetchItalianMeals();

            setState({
                status: 'success',
                items: data,
                message: '',
            });
            //Animazione lista
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();

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
                <Pressable onPress={loadMeals} style={styles.errorButton}>
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

            {/* FILTRI */}
            <View style={styles.filters}>
                <Pressable onPress={() => setShowFavoritesOnly(false)} accessibilityRole="button" accessibilityLabel="Mostra tutti i piatti">
                    <View style={[styles.tab, !showFavoritesOnly && styles.tabActive]}>
                        <Ionicons name="apps-outline" size={20} color="white" />
                        <Text style={[styles.tabText, showFavoritesOnly && styles.tabInactive,]}>
                            Tutti
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => setShowFavoritesOnly(true)} accessibilityRole="button" accessibilityLabel="Mostra solo i piatti preferiti">
                    <View style={[styles.tab, showFavoritesOnly && styles.tabActive]}>
                        <Ionicons name="heart" size={20} color="red" />
                        <Text style={[styles.tabText, !showFavoritesOnly && styles.tabInactive,]}>
                            Preferiti
                        </Text>
                    </View>
                </Pressable>
            </View>
            {/* BARRA DI RICERCA */}
            <TextInput
                style={styles.searchInput}
                placeholder="Cerca un piatto..."
                placeholderTextColor={colors.muted}
                value={search}
                onChangeText={setSearch}
                accessibilityLabel="Campo di ricerca dei piatti"
                accessibilityHint="Scrivi il nome di un piatto per filtrare la lista"
            />
            {/* LISTA PIATTI */}
            <Animated.View style={{ flex: 1, opacity: fadeAnim, }}>
                <FlatList
                    data={displayedMeals}
                    keyExtractor={(item) => item.idMeal}
                    contentContainerStyle={sharedstyles.flatListContent}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={8}
                    maxToRenderPerBatch={8}
                    renderItem={({ item }) => (
                        <Pressable
                            style={({ pressed }) => [styles.card, pressed && { opacity: 0.8, transform: [{ scale: 0.98 }], },]}
                            accessibilityRole="button"
                            accessibilityLabel={`Apri il dettaglio del piatto ${item.strMeal}`}
                            onPress={() => navigation.navigate("MealDetails", { id: item.idMeal })}
                        >

                            <Image source={{ uri: item.strMealThumb }} style={styles.image} accessibilityLabel={`Immagine del piatto ${item.strMeal}`} />
                            <View style={styles.favoriteButton}>
                                <FavoriteButton idMeal={item.idMeal} />
                            </View>
                            <Text style={styles.title} numberOfLines={1}>
                                {item.strMeal}
                            </Text>
                        </Pressable>
                    )}
                />
            </Animated.View>

        </View>
    );
}
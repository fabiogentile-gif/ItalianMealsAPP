import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    Pressable,
    ActivityIndicator,
    Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


import { fetchMealById } from "../services/mealsApi";
import { State, DetailMeal } from "../types/meal";

import { colors } from "../theme/colors";
import { styles } from "../theme/Details.styles";



export default function DetailsScreen({ route }: any) {
    const navigation = useNavigation<any>();
    const { idMeal } = route.params;

    const [meal, setMeal] = useState<DetailMeal | null>(null);
    const [state, setState] = React.useState<State>({
        status: "idle",
        items: [],
        message: "",
    });

    const loadDetails = async () => {
        try {
            setState({
                status: "loading",
                items: [],
                message: "Caricamento piatti",
            });

            const data = await fetchMealById(idMeal);

            setMeal(data);

            setState({
                status: "success",
                items: [],
                message: "OK",
            });
        } catch (err) {
            setState({
                status: "error",
                items: [],
                message: "Errore",
            });
            setMeal(null);
        }
    };

    useEffect(() => {
        if (idMeal) loadDetails();
    }, [idMeal]);

    const getIngredients = () => {
        if (!meal) return [];

        const ingredients: string[] = [];

        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];

            if (ingredient?.trim()) {
                ingredients.push(`${ingredient} - ${measure ?? ""}`);
            }
        }

        return ingredients;
    };

    if (!idMeal) {
        return (
            <View style={styles.errorContainer}>
                <Text>Id non valido</Text>
            </View>
        );
    }

    if (state.status === "loading") {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator color={colors.primary} />
            </View>
        );
    }

    if (!meal) {
        return (
            <View style={styles.errorContainer}>
                <Text>Meal non trovato</Text>

                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.sourceLink}>Torna indietro</Text>
                </Pressable>
            </View>
        );
    }

    const ingredients = getIngredients();

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>{meal.strMeal}</Text>

                <Text style={styles.meta}>
                    {meal.strCategory} • {meal.strArea}
                </Text>

                {meal.strTags && (
                    <Text style={styles.tag}>Tag: {meal.strTags}</Text>
                )}

                {/* INGREDIENTI */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Ingredienti</Text>

                    {ingredients.map((item, index) => (
                        <Text key={index} style={styles.ingredientText}>
                            • {item}
                        </Text>
                    ))}
                </View>

                {/* ISTRUZIONI */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Preparazione</Text>

                    <Text style={styles.instructions}>{meal.strInstructions}</Text>
                </View>

                {/* SOURCE */}
                {meal.strSource && (
                    <Pressable onPress={() => Linking.openURL(meal.strSource!)}>
                        <Text style={styles.sourceLink}>Apri fonte originale</Text>
                    </Pressable>
                )}

                {/* YOUTUBE */}
                {meal.strYoutube && (
                    <Pressable
                        onPress={() => Linking.openURL(meal.strYoutube!)}
                        style={styles.youtubeButton}
                    >
                        <Text style={styles.buttonText}>Guarda su YouTube</Text>
                    </Pressable>
                )}

                {/* BACK */}
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Text style={styles.buttonText}>Torna indietro</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}
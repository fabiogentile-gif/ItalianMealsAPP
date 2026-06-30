import { Pressable, Text } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { useFavorites } from '../../context/FavoritesContext';


export default function FavoriteButton({ idMeal } : {idMeal: string}) {
    const {favoriteIds,toggleFavorite} = useFavorites();

    const favorite = favoriteIds.includes(idMeal);

    return (
        <Pressable onPress={() => toggleFavorite(idMeal)}>
            <Text style={{ fontSize: 24 }}>
                {favorite ? <Ionicons name="heart" size={30} color="red" /> : <Ionicons name="heart-outline" size={30} />}
            </Text>
        </Pressable>
    );
}
import { Text } from "react-native";
import { useFavorites } from '../context/FavoritesContext';



export default function FavoritesScreen() {
    const { favoriteIds } = useFavorites();

    if (favoriteIds.length === 0) {
        return (
            <Text>
                Nessun preferito ancora. Tocca ♡ su un piatto dalla lista.
            </Text>
        );
    }
}

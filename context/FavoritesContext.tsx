import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext<any>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

    useEffect(() => {
        AsyncStorage.getItem('favorites').then(data => {
            if (data) {
                setFavoriteIds(JSON.parse(data));
            }
        });
    }, []);

    const toggleFavorite = async (idMeal: string) => {
        const updated = favoriteIds.includes(idMeal)
            ? favoriteIds.filter(id => id !== idMeal)
            : [...favoriteIds, idMeal];

        setFavoriteIds(updated);
        await AsyncStorage.setItem('favorites', JSON.stringify(updated));
    };

    return (
        <FavoritesContext.Provider
            value={{
                favoriteIds,
                toggleFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => useContext(FavoritesContext);
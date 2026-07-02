import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'app:v1:favs';

export async function loadFavoriteIds(): Promise<string[]> {
    try {
        const value = await AsyncStorage.getItem(FAVORITES_KEY);
        if (!value) {
            return [];
        }
        const parsed = JSON.parse(value);
        if (!Array.isArray(parsed)) {
            return [];
        }
        return parsed;
    } catch {
        return [];
    }
}

export async function saveFavoriteIds(ids: string[]): Promise<void> {
    try {
        await AsyncStorage.setItem(FAVORITES_KEY,JSON.stringify(ids));
    } catch (error) {
        console.error('Errore salvataggio preferiti', error);
    }
}
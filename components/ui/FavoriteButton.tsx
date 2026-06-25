import { Pressable, Text } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

type Props = {
    isFavorite: boolean;
    onPress: () => void;
};

export default function FavoriteButton({
    isFavorite,
    onPress,
}: Props) {
    return (
        <Pressable onPress={onPress}>
            <Text style={{ fontSize: 24 }}>
                {isFavorite ? <Ionicons name="heart" size={30} color="red" /> : <Ionicons name="heart-outline" size={30} />}
            </Text>
        </Pressable>
    );
}
// components/Navbar.tsx

import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

export default function Navbar() {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text}> <Ionicons name="home" size={30} /> Home</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}><Ionicons name="person-circle-outline" size={30} /> Login</Text>

            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 16,
        fontWeight: '500',
    },
});
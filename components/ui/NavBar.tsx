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
                <View style={styles.tab}>
                    <Ionicons name="home" size={30} />
                    <Text style={styles.text}> Home</Text>
                </View>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('Login')}>
                <View style={styles.tab}>
                    <Ionicons name="person-circle-outline" size={30} />
                    <Text style={styles.text}> Login</Text>
                </View>


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
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, Linking, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation<any>();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Home Screen</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Details', { itemId: "a1" })}>
                <Text>Open Details (id: a1)</Text>
            </Pressable>

            <Text style={styles.text}>
                Deep Link: myapp://details/:id
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#f0f0f0",
        marginBottom: 30,
    },
    text: {
        alignSelf: "center",
        backgroundColor: "#f0f0f0",
        marginBottom: 30,
    },
});
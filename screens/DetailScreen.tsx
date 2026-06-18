import React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function DetailsScreen({ route }: any) {
    const navigation = useNavigation<any>();

    const { idMeal } = route.params;


    return (
        <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>

            <Text style={styles.Title}>Details</Text>
            <Text style={{ marginBottom: 20 }}>Id: {idMeal}</Text>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text>Go Back</Text>
            </Pressable>


        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#f0f0f0",
        marginBottom: 30,
    },
    Title: {
        fontSize: 30,
    }
});
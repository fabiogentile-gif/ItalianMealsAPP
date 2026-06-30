import React from 'react';
import { useNavigation } from '@react-navigation/native';


import { Ionicons } from '@react-native-vector-icons/ionicons';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import Avatar from './Avatar';

import { useAuth } from '../../context/UserContext';


export default function Navbar() {
    const navigation = useNavigation<any>();
    const { loggedIn, user } = useAuth();


    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <View style={styles.tab}>
                    <Ionicons name="home" size={30} />
                    <Text style={styles.text}> Home</Text>
                </View>
            </Pressable>
            {!loggedIn ?
                (<Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    <View style={styles.tab}>
                        <Ionicons name="person-circle-outline" size={30} />
                        <Text style={styles.text}> Login</Text>
                    </View>
                </Pressable>
                ) : (
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate('Login')}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                            <Avatar uri={user.avatarUri} />
                            <Text>{user.name}</Text>
                        </View>
                    </Pressable>


                )}

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
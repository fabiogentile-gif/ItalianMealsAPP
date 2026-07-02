import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Pressable, Text } from "react-native";

import Ionicons from '@react-native-vector-icons/ionicons';
import Avatar from "./Avatar";

import { useAuth } from "../../context/UserContext";
import { createNavbarStyles } from "../../theme/Navbar.styles";
import { colors } from "../../theme/colors";

export default function Navbar() {
    const navigation = useNavigation<any>();
    const { user } = useAuth();
    const styles = createNavbarStyles();

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.reset({ index: 0, routes: [{ name: "Home" }] })}>
                <View style={styles.tab}>
                    <Ionicons name="home" size={24} color={colors.primary} />
                    <Text style={[styles.text, { color: colors.primary }]}>
                        Home
                    </Text>
                </View>
            </Pressable>

            {!user ? (
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}>
                    <Ionicons name="person-circle-outline" size={24} color={colors.muted} />
                    <Text style={[styles.text, { color: colors.muted }]}>
                        Login
                    </Text>
                </Pressable>
            ) : (
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("UserScreen")}
                >
                    <View style={styles.userBox}>
                        <Avatar uri={user.avatarUri} size={30} />
                        <Text style={[styles.text, { color: colors.text }]}>
                            {user.name}
                        </Text>
                    </View>
                </Pressable>
            )}
        </View>
    );
}
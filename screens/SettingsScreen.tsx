import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SettingsOption from "../components/ui/SettingOption";
import Avatar from "../components/ui/Avatar";
import { useAuth } from "../context/UserContext";

import Ionicons from '@react-native-vector-icons/ionicons';
import { UserScreenStyles as styles } from "../theme/UserScreen.style";


export default function SettingsScreen() {
    const navigation = useNavigation<any>();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigation.navigate("Login")
    };

    return (
        <View style={styles.container}>

            {/* Profilo */}
            <View style={styles.card}>
                <Avatar uri={user?.avatarUri ?? "https://example.com/default-avatar.png"} size={50} />
                <Text style={styles.profileName}>
                    {user?.name ?? "Utente"}
                </Text>
                <Text style={styles.profileEmail}>
                    {user?.email ?? "email non disponibile"}
                </Text>
            </View>

            {/* Opzioni */}
            <View style={styles.card}>
                <SettingsOption icon="settings-outline" label="Impostazioni" />
            </View>

            {/* Logout */}
            <Pressable style={styles.logoutBtn} onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={22} color="white" />
                <Text style={styles.logoutText}>Logout</Text>
            </Pressable>
        </View>
    );
}
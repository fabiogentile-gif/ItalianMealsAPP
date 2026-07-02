import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import Ionicons from '@react-native-vector-icons/ionicons';

type Props = {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  onPress?: () => void;
};

export default function SettingsOption({ icon, label, onPress }: Props) {
    return (
        <Pressable style={styles.row} onPress={onPress}>
            <Ionicons name={icon} size={22} />
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingVertical: 12,
    },
    text: {
        fontSize: 16,
    },
});
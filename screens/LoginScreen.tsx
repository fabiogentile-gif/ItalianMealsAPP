import { useState } from "react";
import { Text, TextInput, Button, View, Pressable, StyleSheet } from "react-native";


import { validateLogin } from "../services/auth";
import { useAuth } from "../context/UserContext";

export default function LoginScreen({ navigation }: any) {
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        const user = validateLogin(email, password);

        if (!user) {
            setError("Email o password non validi");
            return;
        }

        login({
            name: user.name,
            email: user.email,
            avatarUri: user.avatarUri,
        });

        setError("");
        navigation.replace("Lista");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"gray"}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"gray"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Accedi</Text>
            </Pressable>
            
            {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 30,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#ffffffde",
        padding: 14,
        borderRadius: 10,
        marginBottom: 12,
        color: "#000",
        borderWidth: 1,
        borderColor: "#334155",
    },
    button: {
        backgroundColor: "#3b82f6",
        padding: 14,
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
});
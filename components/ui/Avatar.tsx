import React from "react";
import { View,Image,Text } from "react-native";



export default function Avatar({ uri, size = 48 }: { uri: string; size?: number }) {
  const [failed, setFailed] = React.useState(false);
  const radius = size / 2;

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        overflow: "hidden",
        borderWidth: 1,
      }}
    >
      {failed ? (
        <Text style={{ textAlign: "center", lineHeight: size }}>?</Text>
      ) : (
        <Image
          source={{ uri }}
          style={{ width: size, height: size }}
          onError={() => setFailed(true)}
          accessibilityLabel="Avatar utente"
        />
      )}
    </View>
  );
}
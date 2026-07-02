import { StyleSheet } from "react-native";

export const UserScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    gap: 15,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    gap: 10,
  },

  profileName: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },

  profileEmail: {
    opacity: 0.6,
  },

  logoutBtn: {
    marginTop: "auto",
    backgroundColor: "#e53935",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  logoutText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
import { StyleSheet } from "react-native";
import { colors, spacing } from "./colors";

export const createNavbarStyles = () =>
  StyleSheet.create({
    container: {
      height: 64,
      flexDirection: "row",
      backgroundColor: colors.surface,
      borderTopWidth: 1,
      borderTopColor: colors.border,

      // ombra soft
      shadowColor: "#000",
      shadowOpacity: 0.05,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: -2 },
      elevation: 8,
    },

    button: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    tab: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.xs,
    },

    text: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.text,
    },

    inactive: {
      opacity: 0.4,
    },

    active: {
      opacity: 1,
    },

    userBox: {
      flexDirection: "row",
      alignItems: "center",
      gap: spacing.sm,
    },

    avatar: {
      borderRadius: 20,
    },
  });
import { StyleSheet } from "react-native";
import { colors, spacing } from "./colors";

export const createSharedStyles = () =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },

    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: spacing.md,
    },

    rowCenter: {
      flexDirection: "row",
      alignItems: "center",
    },

    listItem: {
      backgroundColor: colors.surface,
      padding: spacing.md,
      borderRadius: spacing.md,
      marginBottom: spacing.sm,
      borderWidth: 1,
      borderColor: colors.border,
    },

    listTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },

    flatListContent: {
      padding: spacing.sm,
      paddingBottom: spacing.lg,
      gap: spacing.sm,
    },
  });
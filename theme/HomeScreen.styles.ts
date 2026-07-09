import { StyleSheet } from "react-native";
import { colors, spacing } from "./colors";

export const createHomeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: spacing.md,
    },

    filters: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      backgroundColor: colors.surface,
    },

    tab: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      borderRadius: spacing.sm,
    },

    tabText: {
      fontSize: 15,
      fontWeight: "600",
      marginLeft: 6,
      color: colors.text,
    },

    tabInactive: {
      opacity: 0.4,
    },

    tabActive: {
      opacity: 1,
    },

    card: {
      marginBottom: spacing.sm,
      backgroundColor: colors.surface,
      borderRadius: spacing.md,
      overflow: "hidden",
      position: "relative",

      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },

      elevation: 3,
    },

    image: {
      width: "100%",
      height: 180,
    },

    title: {
      padding: spacing.sm,
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },

    errorButton: {
      marginTop: spacing.md,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: spacing.sm,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.lg,
    },

    favoriteButton: {
      position: "absolute",
      top: spacing.sm,
      right: spacing.sm,

      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.white,

      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
    },
    searchInput: {
      backgroundColor: colors.surface,
      marginHorizontal: spacing.md,
      marginTop: spacing.md,
      marginBottom: spacing.sm,

      paddingHorizontal: spacing.md,
      paddingVertical: 12,

      borderRadius: spacing.md,
      borderWidth: 1,
      borderColor: colors.border,

      color: colors.text,
      fontSize: 16,

      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 1 },

      elevation: 2,
    },
  });
import { StyleSheet } from "react-native";
import { colors, spacing } from "../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  image: {
    width: "100%",
    height: 260,
  },

  content: {
    padding: spacing.md,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.text,
  },

  meta: {
    color: colors.muted,
    marginTop: spacing.xs,
  },

  tag: {
    marginTop: spacing.sm,
    color: colors.secondary,
  },

  section: {
    marginTop: spacing.lg,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: spacing.sm,
    color: colors.text,
  },

  card: {
    marginTop: spacing.lg,
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  ingredientText: {
    color: colors.text,
    marginBottom: 4,
  },

  instructions: {
    marginTop: spacing.sm,
    color: colors.text,
    lineHeight: 20,
  },

  sourceLink: {
    marginTop: spacing.lg,
    color: colors.primary,
  },

  youtubeButton: {
    marginTop: spacing.lg,
    backgroundColor: colors.secondary,
    padding: spacing.md,
    borderRadius: 10,
    alignItems: "center",
  },

  backButton: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: colors.white,
    fontWeight: "600",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  errorContainer: {
    padding: spacing.md,
  },
});
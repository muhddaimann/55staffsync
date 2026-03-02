import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Text, useTheme, Surface } from "react-native-paper";
import { useDesign } from "../../../contexts/designContext";
import { router } from "expo-router";

export default function HomeIndex() {
  const theme = useTheme();
  const tokens = useDesign();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={{
        padding: tokens.spacing.lg,
        gap: tokens.spacing.md,
        paddingBottom: tokens.spacing["3xl"],
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text
        variant="headlineMedium"
        style={{ color: theme.colors.onBackground, marginBottom: tokens.spacing.md }}
      >
        Home Overview
      </Text>

    </ScrollView>
  );
}

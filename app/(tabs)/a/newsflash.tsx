import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { useDesign } from "../../../contexts/designContext";
import { useTabs } from "../../../contexts/tabContext";
import Header from "../../../components/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewsFlashPage() {
  const theme = useTheme();
  const tokens = useDesign();
  const { setHideTabBar } = useTabs();

  useEffect(() => {
    setHideTabBar(true);
    return () => setHideTabBar(false);
  }, []);

  const news = [
    {
      title: "System Maintenance",
      description: "Scheduled maintenance tonight at 11:00 PM.",
      icon: "tools",
      date: "18 March 2026",
    },
    {
      title: "HR Policy Update",
      description: "New leave policy effective next month.",
      icon: "file-document-outline",
      date: "17 March 2026",
    },
    {
      title: "Office Closure",
      description: "Office closed this Friday for maintenance.",
      icon: "office-building-outline",
      date: "15 March 2026",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: tokens.spacing.lg,
          paddingBottom: tokens.spacing["3xl"],
          gap: tokens.spacing.lg,
        }}
      >
        <Header
          title="News Flash"
          subtitle="Latest announcements & updates"
          showBack
        />

        {news.map((item, index) => (
          <Card
            key={index}
            mode="elevated"
            style={{
              borderRadius: tokens.radii.xl,
              backgroundColor: theme.colors.surface,
            }}
            contentStyle={{
              padding: tokens.spacing.lg,
              gap: tokens.spacing.md,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                gap: tokens.spacing.md,
              }}
            >
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: tokens.radii.full,
                  backgroundColor: theme.colors.primaryContainer,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={22}
                  color={theme.colors.primary}
                />
              </View>

              <View style={{ flex: 1, gap: tokens.spacing.xs }}>
                <Text variant="titleMedium" style={{ fontWeight: "600" }}>
                  {item.title}
                </Text>
                <Text
                  variant="bodySmall"
                  style={{ color: theme.colors.onSurfaceVariant }}
                >
                  {item.date}
                </Text>
                <Text variant="bodyMedium">{item.description}</Text>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

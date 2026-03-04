import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Text, Card, useTheme, Divider } from "react-native-paper";
import { useDesign } from "../../../contexts/designContext";
import { useTabs } from "../../../contexts/tabContext";
import Header from "../../../components/header";
import TwoRow from "../../../components/a/twoRow";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function RoomPage() {
  const theme = useTheme();
  const tokens = useDesign();
  const { setHideTabBar } = useTabs();

  useEffect(() => {
    setHideTabBar(true);
    return () => setHideTabBar(false);
  }, []);

  const today = new Date().toLocaleDateString("en-MY", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const rooms = [
    {
      tower: "Tower A",
      level: "Level 12",
      list: ["Room A-1201", "Room A-1202", "Room A-1203"],
    },
    {
      tower: "Tower B",
      level: "Level 8",
      list: ["Room B-801", "Room B-802"],
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
          title="Room Booking"
          subtitle="Browse available rooms"
          showBack
        />

        <View style={{ gap: tokens.spacing.xs }}>
          <Text
            variant="bodySmall"
            style={{ color: theme.colors.onSurfaceVariant }}
          >
            Today
          </Text>
          <Text variant="titleMedium" style={{ fontWeight: "600" }}>
            {today}
          </Text>
        </View>

        <TwoRow
          left={{
            amount: 3,
            label: "Active Booking",
            icon: (
              <MaterialCommunityIcons
                name="clock-check-outline"
                size={20}
                color={theme.colors.primary}
              />
            ),
            bgColor: theme.colors.primaryContainer,
            textColor: theme.colors.onPrimaryContainer,
            labelColor: theme.colors.onPrimaryContainer,
          }}
          right={{
            amount: 15,
            label: "Total Rooms",
            icon: (
              <MaterialCommunityIcons
                name="office-building-outline"
                size={20}
                color={theme.colors.secondary}
              />
            ),
            bgColor: theme.colors.secondaryContainer,
            textColor: theme.colors.onSecondaryContainer,
            labelColor: theme.colors.onSecondaryContainer,
          }}
        />

        {rooms.map((group, index) => (
          <View key={index} style={{ gap: tokens.spacing.md }}>
            <View>
              <Text variant="titleMedium" style={{ fontWeight: "600" }}>
                {group.tower}
              </Text>
              <Text
                variant="bodySmall"
                style={{ color: theme.colors.onSurfaceVariant }}
              >
                {group.level}
              </Text>
            </View>

            <Card
              mode="elevated"
              style={{
                borderRadius: tokens.radii.xl,
                backgroundColor: theme.colors.surface,
              }}
              contentStyle={{
                padding: tokens.spacing.md,
                gap: tokens.spacing.sm,
              }}
            >
              {group.list.map((room, idx) => (
                <View key={idx}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: tokens.spacing.sm,
                      paddingVertical: tokens.spacing.xs,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="door"
                      size={18}
                      color={theme.colors.primary}
                    />
                    <Text variant="bodyMedium">{room}</Text>
                  </View>
                  {idx !== group.list.length - 1 && <Divider />}
                </View>
              ))}
            </Card>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

import React, { useRef, useState } from "react";
import {
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  View,
  Pressable,
} from "react-native";
import { useTheme, Text, Card, Switch, Divider } from "react-native-paper";
import { useDesign } from "../../../contexts/designContext";
import { useTabs } from "../../../contexts/tabContext";
import ScrollTop from "../../../components/scrollTop";
import Header from "../../../components/b/header";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Settings() {
  const theme = useTheme();
  const tokens = useDesign();
  const { onScroll } = useTabs();

  const scrollRef = useRef<ScrollView | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = e.nativeEvent.contentOffset.y;
    setShowScrollTop(offset > 300);
    onScroll(offset);
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <>
      <ScrollView
        ref={scrollRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ flex: 1, backgroundColor: theme.colors.background }}
        contentContainerStyle={{
          paddingBottom: tokens.spacing["3xl"],
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <View
          style={{
            paddingHorizontal: tokens.spacing.lg,
            gap: tokens.spacing.lg,
          }}
        >
          <Card
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
            <Text variant="titleSmall" style={{ fontWeight: "600" }}>
              Staff Information
            </Text>

            <View style={{ gap: tokens.spacing.xs }}>
              <Text
                variant="bodySmall"
                style={{ color: theme.colors.onSurfaceVariant }}
              >
                Staff ID
              </Text>
              <Text variant="bodyMedium">EMP001245</Text>
            </View>

            <View style={{ gap: tokens.spacing.xs }}>
              <Text
                variant="bodySmall"
                style={{ color: theme.colors.onSurfaceVariant }}
              >
                Email
              </Text>
              <Text variant="bodyMedium">adam.faizal@company.com</Text>
            </View>
          </Card>

          <Card
            mode="elevated"
            style={{
              borderRadius: tokens.radii.xl,
              backgroundColor: theme.colors.surface,
            }}
          >
            <View
              style={{
                paddingHorizontal: tokens.spacing.lg,
                paddingVertical: tokens.spacing.md,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: tokens.spacing.md,
                }}
              >
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={22}
                  color={theme.colors.primary}
                />
                <Text variant="bodyMedium">Push Notifications</Text>
              </View>

              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            </View>

            <Divider />

            <Pressable
              style={{
                paddingHorizontal: tokens.spacing.lg,
                paddingVertical: tokens.spacing.md,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: tokens.spacing.md,
                }}
              >
                <MaterialCommunityIcons
                  name="information-outline"
                  size={22}
                  color={theme.colors.primary}
                />
                <Text variant="bodyMedium">App Version</Text>
              </View>

              <Text
                variant="bodySmall"
                style={{ color: theme.colors.onSurfaceVariant }}
              >
                v1.0.0
              </Text>
            </Pressable>
          </Card>
        </View>
      </ScrollView>

      <ScrollTop visible={showScrollTop} onPress={scrollToTop} />
    </>
  );
}

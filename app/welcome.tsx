import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { Text, useTheme, ActivityIndicator, Icon } from "react-native-paper";
import { router } from "expo-router";
import { useDesign } from "../contexts/designContext";
import { useAuth } from "../contexts/authContext";

export default function Welcome() {
  const theme = useTheme();
  const tokens = useDesign();
  const { user } = useAuth();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      router.replace("/(tabs)/a");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: tokens.spacing.xl,
      }}
    >
      <View style={[styles.backgroundDecorator, { backgroundColor: theme.colors.primaryContainer, opacity: 0.1 }]} />
      
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            { translateY: slideAnim },
            { scale: scaleAnim }
          ],
          alignItems: "center",
          gap: tokens.spacing.lg,
        }}
      >
        <View style={[styles.iconContainer, { backgroundColor: theme.colors.primaryContainer }]}>
          <Icon source="sync" size={48} color={theme.colors.primary} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text
            variant="headlineMedium"
            style={{ fontWeight: "700", textAlign: "center", color: theme.colors.onSurface }}
          >
            Welcome{user ? `, ${user}` : ""}
          </Text>
          <Text
            variant="titleMedium"
            style={{ 
              textAlign: "center", 
              color: theme.colors.primary, 
              fontWeight: '600',
              marginTop: 4 
            }}
          >
            StaffSync
          </Text>
        </View>

        <View style={{ maxWidth: 280 }}>
          <Text
            variant="bodyMedium"
            style={{
              textAlign: "center",
              color: theme.colors.onSurfaceVariant,
              lineHeight: 22,
            }}
          >
            Syncing your attendance, schedules, and team status for a seamless workday.
          </Text>
        </View>

        <View style={{ marginTop: tokens.spacing.xl, alignItems: 'center', gap: tokens.spacing.md }}>
          <ActivityIndicator size="small" color={theme.colors.primary} />
          <Text variant="labelLarge" style={{ color: theme.colors.outline, letterSpacing: 1 }}>
            PREPARING DASHBOARD
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundDecorator: {
    position: 'absolute',
    width: 600,
    height: 600,
    borderRadius: 300,
    top: -200,
    right: -150,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  }
});


import React, { useState } from "react";
import { View, Image, Pressable } from "react-native";
import {
  Text,
  TextInput,
  Button,
  Card,
  HelperText,
  useTheme,
  ActivityIndicator,
} from "react-native-paper";
import { router } from "expo-router";
import { useDesign } from "../contexts/designContext";
import { useAuth } from "../contexts/authContext";
import { KeyboardLayout } from "../components/keyboardLayout";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const theme = useTheme();
  const tokens = useDesign();
  const { signIn, user, isLoading } = useAuth();

  React.useEffect(() => {
    if (!isLoading && user) {
      router.replace("/welcome");
    }
  }, [user, isLoading]);

  const handleLogin = async () => {
    if (!username || !password) {
      setError(true);
      return;
    }

    setError(false);
    await signIn(username.trim(), password);
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <KeyboardLayout
      style={{
        justifyContent: "center",
        paddingHorizontal: tokens.spacing.xl,
      }}
    >
      <Card
        mode="elevated"
        style={{
          backgroundColor: theme.colors.surface,
          padding: tokens.spacing.xl,
          borderRadius: tokens.radii.xl,
          elevation: 4,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: tokens.spacing.xl,
          }}
        >
          <Image
            source={require("../assets/favicon.png")}
            style={{
              width: 144,
              height: 144,
              marginBottom: tokens.spacing.md,
            }}
            resizeMode="contain"
          />

          <Text
            variant="headlineMedium"
            style={{
              fontWeight: "700",
              textAlign: "center",
              marginBottom: tokens.spacing.xs,
            }}
          >
            Welcome Back
          </Text>

          <Text
            variant="bodyMedium"
            style={{
              textAlign: "center",
              opacity: 0.6,
            }}
          >
            Sign in to continue
          </Text>
        </View>

        <TextInput
          label="Username"
          mode="outlined"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          left={<TextInput.Icon icon="account-outline" />}
          error={error}
          returnKeyType="next"
        />

        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ marginTop: tokens.spacing.md }}
          left={<TextInput.Icon icon="lock-outline" />}
          error={error}
          returnKeyType="done"
          onSubmitEditing={handleLogin}
        />

        <HelperText
          type="error"
          visible={error}
          style={{ marginTop: tokens.spacing.xs }}
        >
          Invalid username or password
        </HelperText>

        <Button
          mode="contained"
          onPress={handleLogin}
          style={{
            borderRadius: tokens.radii.lg,
            paddingVertical: 4,
          }}
          contentStyle={{ paddingVertical: 6 }}
          disabled={!username || !password}
        >
          Login
        </Button>

        <View
          style={{
            marginTop: tokens.spacing.md,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Text variant="bodySmall" style={{ opacity: 0.7 }}>
            Got problem signing in?
          </Text>

          <Pressable onPress={() => router.push("/contact")}>
            <Text
              variant="bodySmall"
              style={{
                color: theme.colors.primary,
                fontWeight: "600",
                textDecorationLine: "underline",
              }}
            >
              Contact us
            </Text>
          </Pressable>
        </View>
      </Card>
    </KeyboardLayout>
  );
}

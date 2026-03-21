import {
  MD3DarkTheme,
  MD3LightTheme,
  configureFonts,
  type MD3Theme,
} from "react-native-paper";

const make = (
  family: string,
  weight: "400" | "500" | "600" | "700",
  fontSize: number,
  lineHeight: number,
  letterSpacing = 0,
) => ({
  fontFamily: family,
  fontWeight: weight,
  fontSize,
  lineHeight,
  letterSpacing,
});

const fontConfig = {
  displayLarge: make("SourceSansPro_700Bold", "700", 57, 64),
  displayMedium: make("SourceSansPro_700Bold", "700", 45, 52),
  displaySmall: make("SourceSansPro_700Bold", "700", 36, 44),

  headlineLarge: make("SourceSansPro_700Bold", "700", 32, 40),
  headlineMedium: make("SourceSansPro_600SemiBold", "600", 28, 36),
  headlineSmall: make("SourceSansPro_600SemiBold", "600", 24, 32),

  titleLarge: make("SourceSansPro_600SemiBold", "600", 22, 28),
  titleMedium: make("SourceSansPro_600SemiBold", "600", 16, 24, 0.1),
  titleSmall: make("SourceSansPro_500Medium", "500", 14, 20, 0.1),

  labelLarge: make("SourceSansPro_600SemiBold", "600", 14, 20, 0.1),
  labelMedium: make("SourceSansPro_500Medium", "500", 12, 16, 0.5),
  labelSmall: make("SourceSansPro_400Regular", "400", 11, 16, 0.5),

  bodyLarge: make("SourceSansPro_400Regular", "400", 16, 24),
  bodyMedium: make("SourceSansPro_400Regular", "400", 14, 20),
  bodySmall: make("SourceSansPro_400Regular", "400", 12, 16),
};

const fonts = configureFonts({ config: fontConfig });

export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  roundness: 14,
  fonts,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#2563EB",
    onPrimary: "#FFFFFF",
    primaryContainer: "#DBEAFE",
    onPrimaryContainer: "#1E3A8A",

    secondary: "#7C3AED",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#EDE9FE",
    onSecondaryContainer: "#2E1065",

    tertiary: "#22C55E",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#DCFCE7",
    onTertiaryContainer: "#052E16",

    error: "#DC2626",
    onError: "#FFFFFF",
    errorContainer: "#FEE2E2",
    onErrorContainer: "#7F1D1D",

    surface: "#FFFFFF",
    onSurface: "#0F172A",
    surfaceVariant: "#E2E8F0",
    onSurfaceVariant: "#334155",

    background: "#F8FAFC",
    onBackground: "#020617",
    outline: "#CBD5F5",
    shadow: "#000000",
    scrim: "#000000",
    surfaceDisabled: "rgba(15,23,42,0.12)",
    onSurfaceDisabled: "rgba(15,23,42,0.38)",
    backdrop: "rgba(15,23,42,0.4)",

    elevation: { ...MD3LightTheme.colors.elevation },
  },
};

export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  roundness: 14,
  fonts,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#93C5FD",
    onPrimary: "#1E3A8A",
    primaryContainer: "#1D4ED8",
    onPrimaryContainer: "#DBEAFE",

    secondary: "#C4B5FD",
    onSecondary: "#2E1065",
    secondaryContainer: "#5B21B6",
    onSecondaryContainer: "#EDE9FE",

    tertiary: "#4ADE80",
    onTertiary: "#052E16",
    tertiaryContainer: "#166534",
    onTertiaryContainer: "#DCFCE7",

    error: "#F87171",
    onError: "#7F1D1D",
    errorContainer: "#991B1B",
    onErrorContainer: "#FEE2E2",

    surface: "#020617",
    onSurface: "#E2E8F0",
    surfaceVariant: "#1E293B",
    onSurfaceVariant: "#CBD5F5",

    background: "#020617",
    onBackground: "#F1F5F9",
    outline: "#475569",
    shadow: "#000000",
    scrim: "#000000",
    surfaceDisabled: "rgba(226,232,240,0.12)",
    onSurfaceDisabled: "rgba(226,232,240,0.38)",
    backdrop: "rgba(0,0,0,0.4)",

    elevation: { ...MD3DarkTheme.colors.elevation },
  },
};
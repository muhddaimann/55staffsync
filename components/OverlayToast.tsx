import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDesign } from '../contexts/designContext';

type Props = {
  visible: boolean;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss: () => void;
  duration?: number;
};

export function OverlayToast({ 
  visible, 
  message, 
  actionLabel, 
  onAction, 
  onDismiss, 
  duration = 3000 
}: Props) {
  const theme = useTheme();
  const tokens = useDesign();
  const insets = useSafeAreaInsets();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        hide();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const hide = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onDismiss();
    });
  };

  if (!visible) return null;

  return (
    <View style={styles.container} pointerEvents="box-none">
      <Animated.View 
        style={{ 
          opacity, 
          width: '100%', 
          alignItems: 'center',
          position: 'absolute',
          bottom: insets.bottom + 100
        }}
      >
        <Surface
          style={[
            styles.content,
            { 
              backgroundColor: theme.colors.inverseSurface,
              borderRadius: tokens.radii.sm,
              paddingVertical: tokens.spacing.sm,
              paddingHorizontal: tokens.spacing.md,
            }
          ]}
          elevation={4}
        >
          <Text style={{ color: theme.colors.inverseOnSurface, flex: 1 }}>
            {message}
          </Text>
          {actionLabel && (
            <TouchableOpacity onPress={() => { onAction?.(); hide(); }}>
              <Text style={{ color: theme.colors.inversePrimary, fontWeight: 'bold', marginLeft: 16 }}>
                {actionLabel.toUpperCase()}
              </Text>
            </TouchableOpacity>
          )}
        </Surface>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    width: '100%',
    maxWidth: 600,
  },
});

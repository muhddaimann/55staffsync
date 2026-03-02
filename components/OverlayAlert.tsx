import React from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Surface, Text, Button, useTheme } from 'react-native-paper';
import { useDesign } from '../contexts/designContext';

type Props = {
  visible: boolean;
  title?: string;
  message?: string;
  buttonText?: string;
  onClose: () => void;
};

export function OverlayAlert({ visible, title, message, buttonText = 'OK', onClose }: Props) {
  const theme = useTheme();
  const tokens = useDesign();

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={styles.fullscreen}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop}>
            <TouchableWithoutFeedback>
              <Surface
                style={[
                  styles.content,
                  { 
                    backgroundColor: theme.colors.surface,
                    borderRadius: tokens.radii.lg,
                    padding: tokens.spacing.lg,
                    gap: tokens.spacing.md,
                  }
                ]}
                elevation={5}
              >
                {title && (
                  <Text variant="headlineSmall" style={{ color: theme.colors.onSurface }}>
                    {title}
                  </Text>
                )}
                {message && (
                  <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
                    {message}
                  </Text>
                )}
                <View style={styles.actions}>
                  <Button mode="contained" onPress={onClose} style={{ borderRadius: tokens.radii.md }}>
                    {buttonText}
                  </Button>
                </View>
              </Surface>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    width: '100%',
    maxWidth: 400,
  },
  actions: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
});

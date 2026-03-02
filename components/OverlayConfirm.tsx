import React from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Surface, Text, Button, useTheme } from 'react-native-paper';
import { useDesign } from '../contexts/designContext';

type Props = {
  visible: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function OverlayConfirm({ 
  visible, 
  title, 
  message, 
  confirmText = 'Confirm', 
  cancelText = 'Cancel', 
  onConfirm, 
  onCancel 
}: Props) {
  const theme = useTheme();
  const tokens = useDesign();

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
      statusBarTranslucent={true}
    >
      <View style={styles.fullscreen}>
        <TouchableWithoutFeedback onPress={onCancel}>
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
                  <Button 
                    mode="text" 
                    onPress={onCancel} 
                    style={{ borderRadius: tokens.radii.md }}
                  >
                    {cancelText}
                  </Button>
                  <Button 
                    mode="contained" 
                    onPress={onConfirm} 
                    style={{ borderRadius: tokens.radii.md }}
                  >
                    {confirmText}
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 8,
  },
});

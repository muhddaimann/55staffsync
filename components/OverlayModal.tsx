import React from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Surface, useTheme } from 'react-native-paper';
import { useDesign } from '../contexts/designContext';

type Props = {
  visible: boolean;
  content: React.ReactNode;
  onDismiss: () => void;
  dismissable?: boolean;
};

export function OverlayModal({ visible, content, onDismiss, dismissable = true }: Props) {
  const theme = useTheme();
  const tokens = useDesign();

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onDismiss}
      statusBarTranslucent={true}
    >
      <View style={styles.fullscreen}>
        <TouchableWithoutFeedback onPress={dismissable ? onDismiss : undefined}>
          <View style={styles.backdrop}>
            <TouchableWithoutFeedback>
              <Surface
                style={[
                  styles.content,
                  { 
                    backgroundColor: theme.colors.surface,
                    borderRadius: tokens.radii.lg,
                    padding: tokens.spacing.lg,
                  }
                ]}
                elevation={5}
              >
                <ScrollView showsVerticalScrollIndicator={false}>
                  {content}
                </ScrollView>
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
    maxWidth: 500,
    maxHeight: '80%',
  },
});

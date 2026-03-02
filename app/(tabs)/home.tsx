import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useDesign } from "../../contexts/designContext";
import { useOverlay } from "../../contexts/overlayContext";

export default function Home() {
  const tokens = useDesign();
  const { alert, confirm, toast, showModal, hideModal } = useOverlay();

  return (
    <ScrollView
      contentContainerStyle={{
        padding: tokens.spacing.md,
        gap: tokens.spacing.md,
      }}
    >
      <Text variant="headlineMedium">Overlay Demo</Text>

      <Button
        mode="contained"
        onPress={() =>
          alert({
            title: "Hello",
            message: "This is a custom alert from OverlayContext",
          })
        }
      >
        Show Alert
      </Button>

      <Button
        mode="contained-tonal"
        onPress={() =>
          confirm({
            title: "Are you sure?",
            message: "Do you want to proceed with this action?",
            onConfirm: () => toast("Action confirmed!"),
            onCancel: () => toast("Action cancelled"),
          })
        }
      >
        Show Confirm
      </Button>

      <Button
        mode="outlined"
        onPress={() => toast("This is a simple toast message")}
      >
        Show Toast
      </Button>

      <Button
        mode="outlined"
        onPress={() =>
          showModal({
            content: (
              <View>
                <Text variant="headlineSmall">Custom Modal</Text>
                <Text
                  variant="bodyMedium"
                  style={{ marginVertical: tokens.spacing.md }}
                >
                  This is a generic modal that can contain any React component.
                </Text>
                <Button mode="contained" onPress={hideModal}>
                  Close
                </Button>
              </View>
            ),
          })
        }
      >
        Show Modal
      </Button>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

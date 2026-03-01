import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { 
  Button, 
  Card, 
  Text, 
  Avatar, 
  List, 
  Portal,
  Modal,
  TextInput,
  Chip
} from 'react-native-paper';
import { router } from 'expo-router';
import { useDesign } from '../../contexts/designContext';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function Home() {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const tokens = useDesign();

  return (
    <View style={{ flex: 1, backgroundColor: tokens.colors.background }}>
      <ScrollView contentContainerStyle={{ padding: tokens.spacing.md, paddingBottom: 110 }}>
        
        {/* Banner Section */}
        <Text variant="headlineMedium" style={{ marginTop: tokens.spacing.lg, fontWeight: 'bold' }}>Paper Demo</Text>
        <Text variant="bodyLarge" style={{ marginBottom: tokens.spacing.lg, opacity: 0.7 }}>Showcasing Material Design components.</Text>

        {/* Card Component */}
        <Card style={{ marginBottom: tokens.spacing.md }}>
          <Card.Title title="Card Example" subtitle="Standard Material Card" left={LeftContent} />
          <Card.Content>
            <Text variant="bodyMedium">This card is built using react-native-paper. It supports elevation, themes, and more.</Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="outlined" onPress={() => {}}>Cancel</Button>
            <Button mode="contained" onPress={() => {}}>Ok</Button>
          </Card.Actions>
        </Card>

        {/* Input & Chips */}
        <View style={{ marginVertical: tokens.spacing.sm }}>
          <TextInput
            label="Example Input"
            mode="outlined"
            placeholder="Type something..."
            style={{ marginBottom: tokens.spacing.sm }}
          />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: tokens.spacing.sm }}>
            <Chip icon="information" style={{ marginBottom: tokens.spacing.xs }} onPress={() => {}}>Info</Chip>
            <Chip icon="heart" style={{ marginBottom: tokens.spacing.xs }} onPress={() => {}}>Favorite</Chip>
            <Chip selected style={{ marginBottom: tokens.spacing.xs }}>Selected</Chip>
          </View>
        </View>

        {/* List Section */}
        <List.Section>
          <List.Subheader>Important Links</List.Subheader>
          <List.Item
            title="Open Info Modal"
            description="Uses React Native Paper Portal & Modal"
            left={props => <List.Icon {...props} icon="information-outline" color={tokens.colors.primary} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={showModal}
          />
          <List.Item
            title="Switch Tab"
            description="Go to the settings tab below"
            left={props => <List.Icon {...props} icon="tab" color={tokens.colors.error} />}
            onPress={() => router.push('/settings')}
          />
        </List.Section>

        {/* Buttons Section */}
        <View style={{ marginVertical: tokens.spacing.sm }}>
          <Button icon="camera" mode="contained" onPress={showModal} style={{ marginVertical: 5 }}>
            Open Demo Modal
          </Button>
          <Button icon="navigation" mode="elevated" onPress={() => {}} style={{ marginVertical: 5 }}>
            Elevated Button
          </Button>
        </View>

        {/* Portal & Modal */}
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: 'white', padding: tokens.spacing.lg, margin: tokens.spacing.lg, borderRadius: tokens.borderRadius.md }}>
            <Text variant="headlineSmall">Native Paper Modal</Text>
            <Text variant="bodyMedium" style={{ marginVertical: tokens.spacing.sm }}>
              This modal uses the Paper Portal system to render above everything else.
            </Text>
            <Button mode="contained" onPress={hideModal}>Close</Button>
          </Modal>
        </Portal>

      </ScrollView>
    </View>
  );
}

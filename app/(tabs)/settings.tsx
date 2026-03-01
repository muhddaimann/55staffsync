import { View } from 'react-native';
import { Text, List, Switch } from 'react-native-paper';
import React from 'react';
import { useDesign } from '../../contexts/designContext';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);
  const tokens = useDesign();

  return (
    <View style={{ flex: 1, backgroundColor: tokens.colors.background }}>
      <View style={{ padding: tokens.spacing.lg, paddingTop: 60, backgroundColor: tokens.colors.surface }}>
        <Text variant="headlineMedium" style={{ fontWeight: 'bold' }}>Settings</Text>
      </View>

      <List.Section style={{ marginTop: tokens.spacing.sm, paddingBottom: 110 }}>
        <List.Subheader>Preferences</List.Subheader>
        <List.Item
          title="Dark Mode"
          left={props => <List.Icon {...props} icon="brightness-6" />}
          right={() => (
            <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} />
          )}
        />
        <List.Item
          title="Enable Notifications"
          left={props => <List.Icon {...props} icon="bell" />}
          right={() => (
            <Switch 
              value={isNotificationsEnabled} 
              onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)} 
            />
          )}
        />
        
        <List.Subheader>Account</List.Subheader>
        <List.Item
          title="Profile"
          description="Manage your personal information"
          left={props => <List.Icon {...props} icon="account" />}
          onPress={() => {}}
        />
        <List.Item
          title="Logout"
          titleStyle={{ color: tokens.colors.error }}
          left={props => <List.Icon {...props} icon="logout" color={tokens.colors.error} />}
          onPress={() => {}}
        />
      </List.Section>
    </View>
  );
}

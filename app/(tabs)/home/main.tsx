import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, Card, useTheme, IconButton } from 'react-native-paper';
import { router } from 'expo-router';
import { useDesign } from '../../../contexts/designContext';
import { KeyboardLayout } from '../../../components/keyboardLayout';

export default function Main() {
  const theme = useTheme();
  const tokens = useDesign();

  return (
    <KeyboardLayout
      scrollable
      scrollViewProps={{
        contentContainerStyle: {
          flexGrow: 1,
          paddingHorizontal: tokens.spacing.xl,
          paddingVertical: tokens.spacing.xl,
        }
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: tokens.spacing.lg }}>
        <IconButton icon="arrow-left" onPress={() => router.back()} />
        <Text variant="headlineSmall">Main Content Form</Text>
      </View>

      <Card
        mode="elevated"
        style={{
          backgroundColor: theme.colors.surface,
          padding: tokens.spacing.xl,
          borderRadius: tokens.radii.xl,
          elevation: 4,
          marginBottom: tokens.spacing.xl,
        }}
      >
        <Text variant="bodyLarge" style={{ marginBottom: tokens.spacing.lg }}>
          Please fill in all the details below. This is a demo of a very long form.
        </Text>

        {[
          "First Name", "Last Name", "Email Address", "Phone Number", 
          "Address Line 1", "Address Line 2", "City", "State", 
          "Zip Code", "Country", "Company", "Job Title", "Department"
        ].map((field, index) => (
          <TextInput
            key={index}
            label={field}
            mode="outlined"
            style={{ marginBottom: tokens.spacing.md }}
          />
        ))}

        <Button
          mode="contained"
          onPress={() => router.back()}
          style={{
            borderRadius: tokens.radii.lg,
            paddingVertical: 4,
            marginTop: tokens.spacing.md,
          }}
          contentStyle={{ paddingVertical: 6 }}
        >
          Submit Form
        </Button>
      </Card>
    </KeyboardLayout>
  );
}

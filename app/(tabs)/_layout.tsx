import { Tabs } from "expo-router";
import React from "react";
import { CalendarIcon } from "react-native-heroicons/outline";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#fff",
        tabBarInactiveBackgroundColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Calendar",
          tabBarIcon: () => <CalendarIcon color="#00B47D" />,
          tabBarLabelStyle: { color: "#00B47D" },
        }}
      />
    </Tabs>
  );
}

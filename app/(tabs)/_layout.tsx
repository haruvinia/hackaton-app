import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#7B2CBF",
        headerShown: false,
        tabBarStyle: {
          height: 85,
          padding: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Inter, sans-serif",
          marginTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Produtos",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="box-open" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="locals"
        options={{
          title: "Locais",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="map-marker" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

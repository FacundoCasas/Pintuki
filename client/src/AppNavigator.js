import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./navigation/HomeNavigator";
import ProfileNavigator from "./navigation/ProfileNavigator";
import { COLORES } from "./globalStyles/globalStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NuevoPosteoScreen from "./screens/NuevoPosteoScreen";
import { useAuth } from "./context/userContext";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORES.principal,
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="NuevoPosteo"
        component={NuevoPosteoScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Nuevo posteo",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Mi perfil",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

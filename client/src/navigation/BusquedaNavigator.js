import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BusquedaScreen from "../screens/BusquedaScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function BusquedaNavigator() {
  return (
    <Stack.Navigator initialRouteName="Busqueda">
      <Stack.Screen
        name="Busqueda"
        component={BusquedaScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

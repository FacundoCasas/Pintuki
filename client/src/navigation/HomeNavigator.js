import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BusquedaScreen from "../screens/BusquedaScreen";
import HomeScreen from "../screens/HomeScreen";
import PublicacionScreen from "../screens/PublicacionScreen"

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Drawer">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Bienvenido a Pintuki",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Busqueda"
        component={BusquedaScreen}
        options={{
          headerShown: true,
          title: "",
      }}
      />
      <Stack.Screen
        name="Publicacion"
        component={PublicacionScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

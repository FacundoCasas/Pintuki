import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BusquedaScreen from "../screens/BusquedaScreen";
import HomeScreen from "../screens/HomeScreen";
import PublicacionScreen from "../screens/PublicacionScreen"
import { COLORES } from "../globalStyles/globalStyles";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Pintuki",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: COLORES.principal,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Busqueda"
        component={BusquedaScreen}
        options={{
          headerShown: true,
          title: "Busqueda de Intereses",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: COLORES.principal,
          },
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

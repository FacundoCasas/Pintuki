import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import AppNavigator from "./AppNavigator";
import "react-native-gesture-handler";
import { UserProvider } from "./context/userContext";

export default function App() {

  return (
    <NativeBaseProvider>
      <UserProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </UserProvider>
    </NativeBaseProvider>
  );
}
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NuevoPosteoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de posteo nuevo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});

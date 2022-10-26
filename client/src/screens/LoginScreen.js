import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginContainer from "../Login Assets/LoginContainter";

export default function LoginScreen() {
  return (
    <LoginContainer/>
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
  },
});

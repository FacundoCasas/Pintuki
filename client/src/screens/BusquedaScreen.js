import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function BusquedaScreen({ navigation }) {
  const goHome = () => {
    //Logica que modifica las preferencias del usuario seleccionadas (solo pueden haber 4 marcadas a la vez)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Confirmar intereses" onPress={goHome} color="teal" />
      </View>
      <Text style={styles.title}>Selecciona hasta 4 Intereses</Text>
      <Text style={styles.description}>Lista de intereses</Text>
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
    fontWeight: "bold",
    fontSize: 20,
    color: "teal",
    padding: 20,
  },
  description: {
    fontSize: 18,
    color: "gray",
    paddingBottom: "2%",
  },
  buttonContainer: {
    width: "90%",
  },
});

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { getCategorias } from "../services/CategoriaService.js";
import ButtonFlatList from "../components/ButtonFlatList.js";

export default function BusquedaScreen({ navigation }) {

  const [categorias, setCategorias] = useState([]);

  useEffect(async () => {
    const response = await getCategorias();
    setCategorias(response)
}, []);

  const goHome = () => {
    //Logica que modifica las preferencias del usuario seleccionadas
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Confirmar intereses" onPress={goHome} color="teal" />
      </View>
      <Text style={styles.title}>Selecciona una categoria</Text>
      <Text style={styles.description}></Text>
      <ButtonFlatList
        navigation={navigation}
        data={categorias}
        ruta={"categoria"}
        publicacion={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: "5%",
    margin: 20,
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

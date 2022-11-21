import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, Button, SafeAreaView } from "react-native";
import { getCategorias } from "../services/CategoriaService.js";
import ButtonFlatList from "../components/ButtonFlatList.js";
import { useFocusEffect } from '@react-navigation/native';
import { COLORES } from '../globalStyles/globalStyles.js';

export default function BusquedaScreen({ navigation }) {

  const [categorias, setCategorias] = useState([]);

  const fetch = async () => {
    const response = await getCategorias();
    setCategorias(response)
  }

  const limpiarIntereses = () => {
    navigation.navigate("Home");
  }

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container} backgroundColor={COLORES.fondos}>
      <Text style={styles.title}>Seleccionar un interés</Text>
      <ButtonFlatList
        navigation={navigation}
        data={categorias}
        ruta={"Home"}
        publicacion={false}
      />
      <Button title="Limpiar intereses" onPress={limpiarIntereses} color={COLORES.principalSuave} />
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
    fontSize: 25,
    color: "indigo.100",
    padding: 20,
  },
  description: {
    fontSize: 18,
    color: "gray",
    paddingBottom: "2%",
  }
});

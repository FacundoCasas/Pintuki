import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView
} from "react-native";
import { getCategorias } from "../services/CategoriaService.js";
import ButtonFlatList from "../components/ButtonFlatList.js";
import { useFocusEffect } from '@react-navigation/native';
import { COLORES, COLORESNB } from '../globalStyles/globalStyles.js';
import { Spinner, Box } from "react-native";

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
    <View style={styles.view} backgroundColor={COLORES.fondos}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Seleccionar un interés</Text>
        {categorias ? (
          <ButtonFlatList
            navigation={navigation}
            data={categorias}
            ruta={"Home"}
            publicacion={false}
          />
        ) : (
          <Box style={styles.container}>
            <Spinner size="lg" color={COLORESNB.secundario} />
          </Box>
        )}
        <Button title="Limpiar intereses" onPress={limpiarIntereses} color={COLORES.principalSuave} />
      </SafeAreaView>
    </View>
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
  view: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "indigo.100",
    padding: 20,
  },
});

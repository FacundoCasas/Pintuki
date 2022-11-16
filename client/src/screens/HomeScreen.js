import React, { useEffect, useState, useCallback } from 'react';
import PublicacionFlatList from "../components/PublicacionFlatList.js";
import ButtonFlatList from '../components/ButtonFlatList.js';
import { getPublicaciones } from "../services/PublicacionService.js";
//import { useIsFocused } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { COLORES } from "../globalStyles/globalStyles";
import LogoPintuki from '../components/LogoPintuki.js';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  FlatList
} from "react-native";

export default function HomeScreen({ navigation, tituloCategoria }) {

  const [publicaciones, setPublicaciones] = useState([]);
  //const isFocused = useIsFocused();

  //Agregar const publicaciones a mostrar

  //Si el parametro titulo categoria esta vacio muestra todas las publicaciones, sino filtra las categorias

  const goToBusqueda = () => {
    navigation.navigate("Busqueda");
  };

  const fetch = async () => {
    const response = await getPublicaciones();
    //if tituloCategoria is null
    setPublicaciones(response)
    //else filtrar por titulo categoria
    //SetPublicaciones
  }

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
  );


  return (
    <SafeAreaView style={styles.container} backgroundColor={COLORES.fondos}>
      <View style={styles.buttonContainer}>
        <Button title="Seleccionar intereses" onPress={goToBusqueda} color={COLORES.principalSuave} />
      </View>

      <ButtonFlatList
        navigation={navigation}
        data={publicaciones}
        ruta={"Publicacion"}
        publicacion={true}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
   /*  marginHorizontal: "5%",
    margin: 20, */
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "teal",
    padding: 20,
  },
  description: {
    fontSize: 18,
    color: "gray",
    paddingBottom: "2%",
  },
  buttonContainer: {
    width: "100%",
    /* marginBottom: 20, */
  },
  image: {
    width: "80%",
    height: "50%",
  },
});

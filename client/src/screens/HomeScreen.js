import React, { useState, useCallback } from 'react';
import ButtonFlatList from '../components/ButtonFlatList.js';
import { getPublicaciones } from "../services/PublicacionService.js";
import { useFocusEffect } from '@react-navigation/native';
import { COLORES, COLORESNB } from "../globalStyles/globalStyles";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Spinner,
  Box
} from "react-native";

export default function HomeScreen({ navigation, route }) {

  const [publicaciones, setPublicaciones] = useState([]);

  const goToBusqueda = () => {
    navigation.navigate("Busqueda");
  };

  const fetch = async () => {
    const response = await getPublicaciones();
    setPublicaciones(response)
  }

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
  )

  let categoria = null;
  let publicacionesPorMostrar;

  if (route.params !== undefined) {
    categoria = route.params.categoriaTitulo
  }

  if (categoria !== null) {
    publicacionesPorMostrar = publicaciones.filter(publicacion => publicacion.etiquetas === categoria)
  } else {
    publicacionesPorMostrar = publicaciones;
  }

  return (
    <SafeAreaView style={styles.container} backgroundColor={COLORES.fondos}>
      <View style={styles.buttonContainer}>
        <Button title="Seleccionar intereses" onPress={goToBusqueda} color={COLORES.principalSuave} />
      </View>
      {publicacionesPorMostrar ? (
        <ButtonFlatList
          navigation={navigation}
          data={publicacionesPorMostrar}
          ruta={"Publicacion"}
          publicacion={true}
        />
      ):(
        <Box style={styles.container}>
          <Spinner size="lg" color={COLORESNB.secundario}/>
        </Box> 
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
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
  },
  image: {
    width: "80%",
    height: "50%",
  },
});

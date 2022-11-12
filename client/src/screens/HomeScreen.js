import React, { useEffect, useState } from 'react';
import PublicacionFlatList from "../components/PublicacionFlatList.js";
import ButtonFlatList from '../components/ButtonFlatList.js';
import { getPublicaciones } from "../services/PublicacionService.js";
import { useIsFocused } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  FlatList
} from "react-native";

export default function HomeScreen({ navigation }) {

  const [publicaciones, setPublicaciones] = useState([]);
  const isFocused = useIsFocused();

  useEffect(async () => {
    //const response =  isFocused && await getPublicaciones();
    const response =  await getPublicaciones();
    //console.log("publicaciones useEffect:", response)
    setPublicaciones(response)
  }, []);

  const goToBusqueda = () => {
    navigation.navigate("Busqueda");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Seleccionar intereses" onPress={goToBusqueda} color="teal" />
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
    marginHorizontal: "5%",
    margin: 20,
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
    width: "90%",
    marginBottom: 20,
  },
  image: {
    width: "80%",
    height: "50%",
  },
});

import React from "react";
import PublicacionFlatList from "../components/PublicacionFlatList.js";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList
} from "react-native";

export default function HomeScreen({ navigation }) {
  const goToBusqueda = () => {
    navigation.navigate("Busqueda");
  };

  //Lista hardcodeada, es solo para probar.
  const publicaciones = [ 
    {"nombre":"imagen1","imagen": "Texto de relleno1", id: "01"},
    {"nombre":"imagen2","imagen": "Texto de relleno2", id: "02"},
    {"nombre":"imagen3","imagen": "Texto de relleno3", id: "03"},
    {"nombre":"imagen4","imagen": "Texto de relleno4", id: "04"},
    {"nombre":"imagen5","imagen": "Texto de relleno5", id: "05"},
    {"nombre":"imagen6","imagen": "Texto de relleno6", id: "06"},
    {"nombre":"imagen7","imagen": "Texto de relleno7", id: "07"},
    {"nombre":"imagen8","imagen": "Texto de relleno8", id: "08"},
    {"nombre":"imagen9","imagen": "Texto de relleno9", id: "09"},
    {"nombre":"imagen10","imagen": "Texto de relleno10", id: "10"},
    {"nombre":"imagen11","imagen": "Texto de relleno11", id: "11"},
    {"nombre":"imagen12","imagen": "Texto de relleno12", id: "12"},
    {"nombre":"imagen13","imagen": "Texto de relleno13", id: "13"},
    {"nombre":"imagen14","imagen": "Texto de relleno14", id: "14"},
    {"nombre":"imagen15","imagen": "Texto de relleno15", id: "15"},
    {"nombre":"imagen16","imagen": "Texto de relleno16", id: "16"},
    {"nombre":"imagen17","imagen": "Texto de relleno17", id: "17"},
    {"nombre":"imagen18","imagen": "Texto de relleno18", id: "18"},
    {"nombre":"imagen19","imagen": "Texto de relleno19", id: "19"},
    ]

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Seleccionar intereses" onPress={goToBusqueda} color="teal" />
      </View>
      <FlatList
        data = {publicaciones}
        keyExtractor = { (item) => item.id}
        renderItem = { ({item, index}) => <PublicacionFlatList item = {item} />}
        ItemSeparatorComponent = { () => <View style = {{ marginBottom: 10}} />}
      />
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

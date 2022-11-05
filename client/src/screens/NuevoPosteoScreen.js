import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,TextInput,SafeAreaView } from 'react-native';
import { getPublicaciones } from '../services/PublicacionService';
import SeleccionarImagen from '../components/SeleccionarImagen'

export default function App() {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [titulo, setTitulo] = useState('');
  //Tienen que consumirse de la base y agregar el componente de categorias
  const [categoria, setCategoria] = useState('');
  
  const publicar = async () => {
    console.log(selectedImage.localUri,titulo,categoria)
  };
 
return (
  <View style={styles.container}>
    <SafeAreaView>
      <SeleccionarImagen
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <TextInput
        style={styles.input}
        onChangeText={setTitulo}
        value={titulo}
        placeholder="Titulo"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCategoria}
        value={categoria}
        placeholder="Categoria"
      />
      <TouchableOpacity onPress={publicar} style={styles.button}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
    </SafeAreaView> 

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
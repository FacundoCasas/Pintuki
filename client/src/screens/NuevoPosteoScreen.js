import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { VStack, Input, Button, NativeBaseProvider, Select, Box, CheckIcon } from "native-base";
import { postPublicacion } from '../services/PublicacionService';
import SeleccionarImagen from '../components/SeleccionarImagen'
import { COLORESNB } from '../globalStyles/globalStyles';
import { useAuth } from '../context/userContext';

export default function App({ navigation }) {

  const [selectedImage, setSelectedImage] = useState(null);
  const [titulo, setTitulo] = useState('');
  //Tienen que consumirse de la base y agregar el componente de categorias
  const [categoria, setCategoria] = useState('');

  const { user } = useAuth();

  const publicar = async () => {
    //el id tiene que ser determinado en el back y el usuario tiene que sacarse el harcodeo
    let publicacion = {
      url: selectedImage,
      titulo: titulo,
      autor: user.usuario,
      etiquetas: categoria
    };
    await postPublicacion(publicacion)
    navigation.navigate("Home")
    limpiarStates()
  };

  const limpiarStates = () => {
    setSelectedImage(null)
    setTitulo('')
    //cambiar con el componente nuevo
    setCategoria('')
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container} backgroundColor={COLORESNB.fondos}>

        <SafeAreaView>
          <SeleccionarImagen
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <VStack space={3} >
            <Input
              type="text"
              onChangeText={setTitulo}
              value={titulo}
              placeholder="Titulo"
            />
            <Select selectedValue={categoria} accessibilityLabel="Seleccionar etiqueta" placeholder="Seleccionar etiqueta" _selectedItem={{
              bg: "warning.500",
              endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setCategoria(itemValue)}>
              <Select.Item label="Arte" value="Arte" />
              <Select.Item label="Cine" value="Cine" />
              <Select.Item label="Comida" value="Comida" />
              <Select.Item label="Meme" value="Meme" />
              <Select.Item label="Escultura" value="Escultura" />
              <Select.Item label="Fotografia" value="Fotografia" />
              <Select.Item label="Juegos" value="Juegos" />
              <Select.Item label="Paisaje" value="Paisaje" />
              <Select.Item label="Tatuajes" value="Tatuajes" />
              <Select.Item label="Animales" value="Animales" />
            </Select>
            <Button mb="10" mt="2" colorScheme={COLORESNB.algoScheme} onPress={publicar} >
              Publicar
            </Button>
          </VStack>
        </SafeAreaView>


      </View>
    </NativeBaseProvider>


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
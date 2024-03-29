import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  SafeAreaView 
} from 'react-native';
import { 
  VStack, 
  Input, 
  Button, 
  Select, 
  CheckIcon, 
  Text, 
  Center, 
  Box, 
  Link, 
  Heading
} from "native-base";
import { postPublicacion } from '../services/PublicacionService';
import SeleccionarImagen from '../components/SeleccionarImagen'
import { COLORES, COLORESNB } from '../globalStyles/globalStyles';
import { useAuth } from '../context/userContext';
import LogoPintuki from '../components/LogoPintuki';

export default function App({ navigation }) {

  const [selectedImage, setSelectedImage] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');

  const { user, isAuthenticated } = useAuth();

  const publicar = async () => {
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
    setCategoria('')
  }

  return (
    <>
      {isAuthenticated ?
        (
          <View style={styles.container} backgroundColor={COLORES.fondos}>

            <SafeAreaView backgroundColor={COLORESNB.fondos}>
              <SeleccionarImagen
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
              <Box space={3} m="10"></Box>
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
        )
        :
        (
          <Center flex={1} px="3" w="100%" backgroundColor={COLORESNB.fondos}>
              <Box safeArea p="2" py="8" w="90%" maxW="290">
                  <Center>
                    <Heading>¿Sos nuevo?</Heading>
                    <LogoPintuki/>
                    <Text fontSize="lg" >Registrate para crear un Pintuki</Text>
                    <Link onPress={() => navigation.navigate("ProfileStack", { screen: "LogIn" })}>Inicia Sesion</Link>
                  </Center>
              </Box>
          </Center>
        )}
    </>
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
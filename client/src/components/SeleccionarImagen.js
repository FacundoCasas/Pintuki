import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import {
  StyleSheet,
  Image
} from "react-native";
import {
  NativeBaseProvider,
  Button,
  VStack,
  Center,
  Box
} from 'native-base';
import { COLORESNB } from '../globalStyles/globalStyles';

const SeleccionarImagen = ({ selectedImage, setSelectedImage }) => {

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 4]
    });
    if (pickerResult.canceled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.assets[0].uri });
  };
  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <NativeBaseProvider>
        <Center flex={1} px="3" w="100%" backgroundColor={COLORESNB.fondos}>

          <VStack space={3} mt="5">
            <Box>
              <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
              <Button.Group isAttached colorScheme={COLORESNB.secundarioScheme} mx={{
                base: "auto",
                md: 0
              }} size="sm">
                <Button mt="2" colorScheme={COLORESNB.secundarioScheme} onPress={openShareDialogAsync} >
                  Compartir foto
                </Button>
                <Button variant="outline" mt="2" colorScheme={COLORESNB.secundarioScheme} onPress={openImagePickerAsync} >
                  Cambiar foto
                </Button>
              </Button.Group>
            </Box>
          </VStack>
        </Center>
      </NativeBaseProvider>
    );
  }

  return (

    <Center flex={1} px="3" w="100%" backgroundColor={COLORESNB.fondos}>
      <VStack space={3} mt="5">
        <Image source={{ uri: 'https://i.ibb.co/BVxfsLD/imagepickerlogo.png' }} style={styles.logo} />

        <Button colorScheme={COLORESNB.secundarioScheme} onPress={openImagePickerAsync} >
          Selecciona una foto
        </Button>
      </VStack>
    </Center>

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
});

export default SeleccionarImagen;
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { StyleSheet, View, Text,Image,TouchableOpacity } from "react-native";

const SeleccionarImagen = ({selectedImage,setSelectedImage}) => {

    const openImagePickerAsync = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing : true,
        aspect:[3,4]
        });
        if (pickerResult.cancelled === true) {
        return;
        }

        setSelectedImage( { localUri: pickerResult.uri });
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
        <View style={styles.container}>
            <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} /> 
            <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
                <Text style={styles.buttonText}>Compartir Foto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Cambiar Foto</Text>
            </TouchableOpacity>
        </View>
    );
    }

    return (
    <View style={styles.container}>
        <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
            <Text style={styles.buttonText}>Selecciona una Foto</Text>
        </TouchableOpacity>
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
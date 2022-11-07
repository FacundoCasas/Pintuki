import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, SafeAreaView } from 'react-native';
import { getPublicacion } from '../services/PublicacionService';


export default function App(id) {

    const [publicacion, setPublicacion] = useState(null);

    useEffect(() => {
        const publicacion = getPublicacion(id);
        console.log("publicacion:", publicacion)
        setPublicacion(publicacion)
    }, []);

    const agregarFavoritos = async () => {
        //agregarFavoritos del usuario logeado
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image source={{ uri: publicacion.url }} style={styles.thumbnail} />
                <Text
                    style={styles.input}
                    value={publicacion.titulo}
                    placeholder="Titulo"
                />
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
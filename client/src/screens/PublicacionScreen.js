import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    VStack, Button, HStack, Text, Image, Box, AspectRatio, Heading, FavouriteIcon,
    useToast
} from "native-base";
import { getPublicacion } from '../services/PublicacionService';
import { agregarFavoritos } from '../services/UsuarioService'
import { Ionicons } from "@expo/vector-icons";
import { COLORESNB } from '../globalStyles/globalStyles';
import { useAuth } from "../context/userContext.js";

export default function App({ route, navigation }) {

    const { itemId } = route.params;
    const [publicacion, setPublicacion] = useState(null);
    const toast = useToast();

    const fetch = async () => {
        const response = await getPublicacion(itemId);
        setPublicacion(response)
    }

    const { user, isAuthenticated, agregarAFavoritosContext } = useAuth();

    useEffect(() => {
        fetch()
    }, []);

    const botonFavoritos = async () => {
        //agregarFavoritos del usuario logeado
        console.log("Agregando a fav publicaciones fav", user.publicacionesFavoritas)

        if (await publicacionNoEstaEnFavoritos()) {
            const data = {
                username: user.usuario,
                publicacionId: publicacion.id
            }
            await agregarFavoritos(data);
            await agregarAFavoritosContext(publicacion.id);
        }
    };

    const publicacionNoEstaEnFavoritos = async () => {
        console.log(!user.publicacionesFavoritas.includes(publicacion.id))
        return !user.publicacionesFavoritas.includes(publicacion.id);
    }

    const goBack = () => {
        navigation.goBack();
    };
    return (
        publicacion &&
        <Box style={styles.container}>
            <AspectRatio w="100%" ratio={14 / 16}>
                <Image source={{ uri: publicacion.url }} alt="image" />
            </AspectRatio>
            <HStack m="5">
                <VStack >
                    <Heading>{publicacion.autor}</Heading>
                    <Text>{publicacion.titulo}</Text>
                </VStack>
                <Box m="5" px="30%" />
                {isAuthenticated &&
                    <>
                        {publicacion &&
                            <>
                                {publicacionNoEstaEnFavoritos() === true ? 
                                    <Button onPress={botonFavoritos} colorScheme={COLORESNB.secundarioScheme} leftIcon={<FavouriteIcon />} />
                                 : 
                                    <Button onPress={() => toast.show({
                                        description: "Esta Publicacion ya fue Agregada"
                                    })
                                    } colorScheme={"muted"} leftIcon={<FavouriteIcon />} />
                                
                                }
                            </>
                        }
                    </>
                }
            </HStack>
        </Box>
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
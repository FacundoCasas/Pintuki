import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  VStack,
  Button,
  HStack,
  Text,
  Image,
  Box,
  AspectRatio,
  FavouriteIcon,
  useToast,
  Spinner
} from "native-base";
import { getPublicacion } from "../services/PublicacionService";
import { agregarFavoritos } from "../services/UsuarioService";
import { COLORESNB } from "../globalStyles/globalStyles";
import { useAuth } from "../context/userContext.js";

export default function App({ route, navigation }) {
  const { itemId } = route.params;
  const [publicacion, setPublicacion] = useState(null);
  const toast = useToast();
  const [publicacionEstaEnFavoritos, setPublicacionEstaEnFavoritos] =
    useState(false);

  const fetch = async () => {
    const response = await getPublicacion(itemId);
    setPublicacion(response);
  };

  const { user, isAuthenticated, agregarAFavoritosContext } = useAuth();

  useEffect(() => {
    fetch();
  }, []);

  const botonFavoritos = async () => {
    //agregarFavoritos del usuario logeado
    console.log(
      "Agregando a fav publicaciones fav",
      user.publicacionesFavoritas
    );

    if (publicacionNoEstaEnFavoritos()) {
      const data = {
        username: user.usuario,
        publicacionId: publicacion.id,
      };
      await agregarFavoritos(data);
      await agregarAFavoritosContext(publicacion.id);
    }
  };


// Siempre conviene hacer los booleanos en positivo (En este caso sería "getPublicacionesEstaEnFavorito", en vez de NO está en favoritos, que después se vuelve confuso para leer) 
  const publicacionNoEstaEnFavoritos = async () => { // El nombre de esta función parece una variable booleana
    console.log(
      "return de publicacionNoEstaEnFavoritos",
      !user.publicacionesFavoritas.includes(publicacion.id)
    );
    setPublicacionEstaEnFavoritos(
      user.publicacionesFavoritas.includes(publicacion.id)
    );
    return !user.publicacionesFavoritas.includes(publicacion.id); // En vez de repetir código convendría declarar una variable local que guarde el resultado de esto
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
    {publicacion ? (
      <Box style={styles.container}>
        <AspectRatio w="100%" ratio={14 / 16}>
          <Image source={{ uri: publicacion.url }} alt="image" />
        </AspectRatio>
        <HStack m="5" marginHorizontal={10}>
          <VStack  style={{ flex: 1, alignItems: 'flex-start' }}>
            <Text fontSize="xl" bold>{publicacion.autor}</Text>
            <Text fontSize="md">{publicacion.titulo}</Text>
          </VStack>
          <Box/>
          <>
            {isAuthenticated && publicacion && ( //Acá uní estos dos condicionales en uno, no hace falta que sean dos sentencias diferentes
              <>
                {publicacionEstaEnFavoritos ? ( // Es mejor usar una variable que guarde el resultado de la función, antes que ejecutar la función una y otra vez con cada render) 
                  <Button
                    onPress={() =>
                      toast.show({
                        description: "Esta Publicacion ya fue Agregada", // No se puede eliminar de favoritos no?""
                      })
                    }
                    colorScheme={"muted"}
                    leftIcon={<FavouriteIcon />}
                  />
                ) : (
                  <Button
                    onPress={botonFavoritos}
                    colorScheme={COLORESNB.secundarioScheme}
                    leftIcon={<FavouriteIcon />}
                  />
                )}
              </>
            )}
          </>
        </HStack>
      </Box>
    ) : ( 
      <Box style={styles.container}>
        <Spinner size="lg" color={COLORESNB.secundario}/>
      </Box>
    )
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

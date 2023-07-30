import React, { useEffect, useState/* , useCallback */ } from "react";
//import { useFocusEffect } from "@react-navigation/native";
import {
  Box,
  Text,
  Button,
  Center,
  Image,
} from "native-base";
import ButtonFlatList from "../components/ButtonFlatList.js";
import LogInScreen from "./LoginScreen.js";
import { useAuth } from "../context/userContext.js";
import { COLORESNB } from "../globalStyles/globalStyles";
import {
  getPublicacionesFavoritas,
  getPublicacionesCreadas,
} from "../services/PublicacionService";

export default function ProfileScreen({ navigation }) {
  const { user, logOut, isAuthenticated } = useAuth();
  const [publicacionesaMostrar, setPublicacionesaMostrar] = useState([]);
  const [isFavouriteSelected, setIsFavouriteSelected] = useState(true);

  useEffect(() => {
    fetchFavoritos();
  }, []);

  const fetchFavoritos = async () => {
    if (isAuthenticated) {
      const data = {
        ids: user.publicacionesFavoritas,
      };
      setPublicacionesaMostrar(await getPublicacionesFavoritas(data));
      setIsFavouriteSelected(true)
    }
  };

  const fetchCreadas = async () => {
    setPublicacionesaMostrar(await getPublicacionesCreadas(user.usuario));
    setIsFavouriteSelected(false)
  };

  const logOutOnClick = () => {
    logOut();
    navigation.navigate("HomeStack", { screen: "Home" });

  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Button
            style={{
              position: "absolute",
              right: 5,
              top: 5,
              zIndex: 1,
            }}
            mt={10}
            onPress={logOutOnClick}
            colorScheme={COLORESNB.principalScheme}
          >
            Cerrar Sesión
          </Button>

          <Center flex={1} px="3" w="100%" backgroundColor={COLORESNB.fondos}>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
              <Center>
                <Image
                  size={90}
                  borderRadius={100}
                  borderWidth={2}
                  borderColor={COLORESNB.letras}
                  m="3"
                  source={{
                    uri: user.fotoPerfil,
                  }}
                  alt="LogoPintuki"
                />
                <Text>¡Hola {user.usuario}!</Text>
              </Center>
              <Button.Group
                isAttached
                colorScheme="blue" //Qué es este color?
                mx={{
                  base: "auto",
                  md: 0,
                }}
                size="sm"
              >
                <Button
                  mt="2"
                  colorScheme="warning"
                  onPress={fetchFavoritos}
                  variant={!isFavouriteSelected ? "outline" : "solid"} // Hice esto porque como estaba antes no sabía cuándo estaba seleccionado uno y cuándo otro
                >
                  Pintukis Favoritos
                </Button>
                <Button
                  variant={isFavouriteSelected ? "outline" : "solid"}
                  mt="2"
                  colorScheme="warning"
                  onPress={fetchCreadas}
                >
                  Pintukis Creados
                </Button>
              </Button.Group>
            </Box>

            {publicacionesaMostrar && (
              <ButtonFlatList
                navigation={navigation}
                data={publicacionesaMostrar}
                ruta={"Publicacion"}
                publicacion={true}
              />
            )}
          </Center>
        </>
      ) : (
        <LogInScreen navigation={navigation} />
      )}
    </>
  );
}

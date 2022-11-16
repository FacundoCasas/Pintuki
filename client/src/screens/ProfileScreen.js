import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Center,
  Image,
  HStack,
  Fab,
  ArrowBackIcon,
} from "native-base";
import { ButtonFlatList } from "native-base";
import LogInScreen from "./LoginScreen.js";
import { useAuth } from "../context/userContext.js";
import { COLORESNB } from "../globalStyles/globalStyles";

export default function ProfileScreen({ navigation }) {
  // const [userLogueado, setUserLogueado] = useState(""); ---> Este userLogueado tiene que venir del contexto, para eso traigo el user del contexto usando el hook de useAuth()
  const { user, logOut, isAuthenticated } = useAuth();

  const logOutOnClick = () => {
    try {
      logOut();
      //console.log("user", user);
      console.log("isAuthenticated", isAuthenticated);

      navigation.navigate("HomeStack", { screen: "Home" });
    } catch (error) {
      //Acá va todo lo que quieren que haga si el login falla (mostrar un toast por ejemplo)
    }
  };

  if (isAuthenticated) {
    console.log("ProfileScreen: user en contexto: ", user);
  }
  return (
    <>
      {isAuthenticated ? (
        <>
        
        
        <Button style={{
                position: 'absolute',
                right: 5,
                top: 5,
          }}   mt={10}
              //icon={<ArrowBackIcon/>}
              //label={<Text>Cerrar Sesion</Text>}
              onPress={logOutOnClick}
              colorScheme={COLORESNB.principalScheme}
        > Cerrar Sesion</Button>
        
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
              colorScheme="blue"
              mx={{
                base: "auto",
                md: 0,
              }}
              size="sm"
            >
              <Button
                mt="2"
                colorScheme="warning"
                onPress={() => console.log("Pintukis Favoritos")}
              >
                Pintukis Favoritos
              </Button>

              <Button
                variant="outline"
                mt="2"
                colorScheme="warning"
                onPress={() => console.log("Pintukis Creados")}
              >
                Pintukis Creados
              </Button>
            </Button.Group>
          </Box>


        </Center>
        </>
      ) : (
        <LogInScreen
          navigation={navigation}
       />
      )}
    </>
  );
}

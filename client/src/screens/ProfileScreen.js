import React, { useEffect, useState } from 'react';


import { Box, Text, Heading, VStack, Input, Link, Button, HStack, Center, NativeBaseProvider, Image} from "native-base";
import { getUsuario } from '../services/UsuarioService.js';
import LogInScreen from './LogInScreen.js';





    export default function ProfileScreen ({navigation}){
      
      const [userLogueado, setUserLogueado] = useState('')
      
      /*
      const loginUsuario = async () => {
        //el id tiene que ser determinado en el back y el usuario tiene que sacarse el harcodeo
        let clave = {
          username: usuario,
          password: contrasenia
        };
        setUserLogueado = await getUsuario(clave)
        console.log("Front", userLogueado)
      };
      */

      if(userLogueado !== ""){
        console.log("ProfileScreen", userLogueado)
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3" w="100%">
              <Box safeArea p="2" py="8" w="90%" maxW="290" >
              <Center>
              <Image size={90} borderRadius={100} borderWidth={2} borderColor={"black"} m="3" source={{
              uri: userLogueado.fotoPerfil }} alt="LogoPintuki" />
              <Text>Estas Logueado {userLogueado.usuario}</Text>
              </Center>

              <Button.Group isAttached colorScheme="blue" mx={{
                  base: "auto",
                  md: 0
                }} size="sm">
                <Button mt="2" colorScheme="indigo" onPress={() => console.log("Pintukis Favoritos")} >
                Pintukis Favoritos
                </Button>

                <Button variant="outline" mt="2" colorScheme="indigo" onPress={() => console.log("Pintukis Creados")} >
                Pintukis Creados
                </Button>
              </Button.Group>

              </Box>
            </Center>
          </NativeBaseProvider>
        );

      }else{
        return(
          <LogInScreen navigation={navigation} userLogueado={userLogueado} setUserLogueado={setUserLogueado}></LogInScreen>
        )

      }

      
    };
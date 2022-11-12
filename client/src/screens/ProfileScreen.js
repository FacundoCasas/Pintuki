import React, { useEffect, useState } from 'react';


import { Box, Text, Heading, VStack, Input, Link, Button, HStack, Center, NativeBaseProvider} from "native-base";
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

              <Text>Estas Logueado {userLogueado.usuario}</Text>


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
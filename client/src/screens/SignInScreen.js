import React, {useContext, useState} from 'react';
import { COLORESNB } from '../globalStyles/globalStyles.js';
import LogoPintuki from "../components/LogoPintuki.js";

import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";

import { addUsuario } from '../services/UsuarioService.js';

import { useAuth } from "../context/userContext";


    export default function LogInScreen ({navigation}){
        
      const [usuario, setUsuario] = useState('');
      const [contrasenia, setContrasenia] = useState('');

      const {signInUsuario, setUser, isAuthenticated, setIsAuthenticated} = useAuth()
      
      const registrarUsuario = async () => {
        //el id tiene que ser determinado en el back y el usuario tiene que sacarse el harcodeo
        let usuarioCreado = {
          usuario: usuario,
          contrasenia: contrasenia,
          fotoPerfil: "https://i.ibb.co/KjFFfmq/diego-pintuki-01.jpg",
        };

        setUser(await addUsuario(usuarioCreado))
        await setIsAuthenticated(true)
        if(isAuthenticated) {
          navigation.navigate("HomeStack", { screen: "Home" });
        }
      }; 

      const onClickSignIn = async () => {
        try{
          console.log("sign in usuario", "pre sign in funcion context")
          await signInUsuario(usuario, contrasenia)
          console.log("sign in usuario", "post sign in funcion context")
          navigation.navigate("HomeStack", { screen: "Home" });
        } catch (error) {
          //Acá va todo lo que quieren que haga si el login falla (mostrar un toast por ejemplo)
        }

      }
      
      
      
      return (
          <NativeBaseProvider>
            <Center flex={1} px="3" w="100%">
              <Box safeArea p="2" py="8" w="90%" maxW="290" >

            <Center>
                <LogoPintuki/>

                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                Registrarte
                </Heading>
            </Center>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Elegi tu nombre de usuario</FormControl.Label>
            <Input type="text"
                  onChangeText={setUsuario}
                  value={usuario} 
                  placeholder="Nombre de Usuario"
                />
          </FormControl>
          <FormControl>
            <FormControl.Label>Crea tu Constraseña</FormControl.Label>
            <Input type="password" 
                  onChangeText={setContrasenia}
                  value={contrasenia}
                  placeholder="Contraseña"
                />
          </FormControl>
          {/* <FormControl>
            <FormControl.Label>Ingresa tu constraseña nuevamente</FormControl.Label>
            <Input type="password" 
                  onChangeText={setContrasenia}
                  value={contrasenia}
                  placeholder="Constraseña"
                />
          </FormControl> */}
          <Button mt="2" colorScheme={COLORESNB.principalScheme} onPress={onClickSignIn}>
            Registrarse
          </Button>
         
        </VStack>
      </Box>
    </Center>
          </NativeBaseProvider>
        );
    };
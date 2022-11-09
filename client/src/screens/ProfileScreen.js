import React, { useEffect, useState } from 'react';

import LogoPintuki from "../components/LogoPintuki.js";

import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image, useBreakpointValue } from "native-base";
import { getUsuario } from '../services/UsuarioService.js';





    export default function ProfileScreen ({navigation}){
      
      const [usuario, setUsuario] = useState('');
      const [contrasenia, setContrasenia] = useState('');
      
      const loginUsuario = async () => {
        //el id tiene que ser determinado en el back y el usuario tiene que sacarse el harcodeo
        let clave = {
          username: usuario,
          password: contrasenia
        };
        await getUsuario(clave)
      };


      return (
          <NativeBaseProvider>
            <Center flex={1} px="3" w="100%">
              <Box safeArea p="2" py="8" w="90%" maxW="290" >

              <Center>
                <LogoPintuki/>
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                  Iniciar Sesión
                </Heading>
              </Center>

              <VStack space={3} mt="5">
                
                <Text>Nombre de Usuario</Text>
                <Input 
                  type="text"
                  onChangeText={setUsuario}
                  value={usuario} 
                  placeholder="Nombre de Usuario"
                />
                <Text>Constraseña</Text>
                <Input 
                  type="password" 
                  onChangeText={setContrasenia}
                  value={contrasenia}
                  placeholder="Constraseña"
                />
                
                <Button mt="2" colorScheme="indigo" onPress={loginUsuario}>
                  Iniciar Sesión
                </Button>
                <HStack mt="6" justifyContent="center">
                  <Text fontSize="sm" color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }}>
                    ¿Todavia no tenes cuenta?.{" "}
                  </Text>
                  <Link _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm"
                }} onPress={() => navigation.navigate("LogIn")}>
                    Registrate!
                  </Link>
                </HStack>
              </VStack>
              </Box>
            </Center>
          </NativeBaseProvider>
        );
    };
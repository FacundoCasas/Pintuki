import React, {useState} from 'react';

import LogoPintuki from "../components/LogoPintuki.js";

import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";

import { addUsuario } from '../services/UsuarioService.js';


    export default function LogInScreen ({navigation}){
        
      const [usuario, setUsuario] = useState('');
      const [contrasenia, setContrasenia] = useState('');
      
      const registrarUsuario = async () => {
        //el id tiene que ser determinado en el back y el usuario tiene que sacarse el harcodeo
        let usuarioCreado = {
          usuario: usuario,
          contrasenia: contrasenia,
          fotoPerfil: "https://i.ibb.co/KjFFfmq/diego-pintuki-01.jpg",
        };
        await addUsuario(usuarioCreado)
      };
      
      
      
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
                  placeholder="Constraseña"
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
          <Button mt="2" colorScheme="indigo" onPress={registrarUsuario}>
            Registrarse
          </Button>
         
        </VStack>
      </Box>
    </Center>
          </NativeBaseProvider>
        );
    };
import React from 'react';

import LogoPintuki from "../components/LogoPintuki.js";

import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";



    export default function LoginScreen ({navigation}){
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
            <FormControl.Label>Nombre de Usuario</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Constraseña</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Ingresa tu constraseña nuevamente</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Registrarse
          </Button>
         
        </VStack>
      </Box>
    </Center>
          </NativeBaseProvider>
        );
    };
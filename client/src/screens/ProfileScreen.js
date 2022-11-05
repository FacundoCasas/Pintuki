import React from 'react';

import LogoPintuki from "../components/LogoPintuki.js";

import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";



    export default function ProfileScreen ({navigation}){
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3" w="100%">
              <Box safeArea p="2" py="8" w="90%" maxW="290" >

                <Center>
                <Image size={90} borderRadius={100} borderWidth={2} borderColor={"black"} m="3" source={{
        uri: "https://i.ibb.co/KjFFfmq/diego-pintuki-01.jpg" }} alt="LogoPintuki" />

              <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                Iniciar Sesión
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
          <Button mt="2" colorScheme="indigo">
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
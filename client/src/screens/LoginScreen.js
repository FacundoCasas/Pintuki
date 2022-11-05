/*
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de login</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    
    fontSize: 20,
  },
});
*/


import React from 'react';

import LogoPintuki from "../components/LogoPintuki.js";

import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";



    export default  () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3" w="100%">
              <Box safeArea p="2" py="8" w="90%" maxW="290" >

                <Center>
                <Image size={90} borderRadius={100} borderWidth={2} borderColor={"black"} m="3" source={{
        uri: "https://i.ibb.co/KjFFfmq/diego-pintuki-01.jpg" }} alt="LogoPintuki" />

              <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                Registrarse
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
            <FormControl.Label>ingrese su constraseña nuevamente</FormControl.Label>
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

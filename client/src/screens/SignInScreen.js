import React, { useState } from 'react';
import { COLORESNB } from '../globalStyles/globalStyles.js';
import LogoPintuki from "../components/LogoPintuki.js";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  useToast
} from "native-base";
import { useAuth } from "../context/userContext";


export default function LogInScreen({ navigation }) {

  const toast = useToast();

  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const { signInUsuario } = useAuth()

  const onClickSignIn = async () => {
    try {
      const result = await signInUsuario(usuario, contrasenia)
      if (result === null) {
        toast.show({
          description: "El nombre de usuario ya existe"
        })
      } else {
        navigation.goBack()
        navigation.navigate("HomeStack", { screen: "Home" });
      }
    } catch (error) {
      toast.show({
        description: `Error:  ${error}`
      })
    }
  }


  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" w="100%" backgroundColor={COLORESNB.fondos}>
        <Box safeArea p="2" py="8" w="90%" maxW="290" >
          <Center>
            <LogoPintuki />
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
              Registrate
            </Heading>
          </Center>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Elegi tu nombre de usuario</FormControl.Label>
              <Input type="text"
                onChangeText={setUsuario}
                value={usuario}
                placeholder="Nombre de usuario"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Crea tu constraseña</FormControl.Label>
              <Input type="password"
                onChangeText={setContrasenia}
                value={contrasenia}
                placeholder="Contraseña"
              />
            </FormControl>
            <Button mt="2" colorScheme={COLORESNB.principalScheme} onPress={onClickSignIn}>
              Registrarse
            </Button>

          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};
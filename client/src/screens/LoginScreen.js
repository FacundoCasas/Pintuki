import React, { useState } from "react";
import LogoPintuki from "../components/LogoPintuki.js";
import {
  Box,
  Text,
  Heading,
  VStack,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import { useAuth } from "../context/userContext";
import { COLORESNB } from '../globalStyles/globalStyles';

export default function LogInScreen({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const { loginUsuario } = useAuth();

  const onClick = () => {
    try {
      loginUsuario(usuario, contrasenia);
      //console.log("user", user);
      //console.log("isAuthenticated", isAuthenticated);

      navigation.navigate("HomeStack", { screen: "Home" });
    } catch (error) {
      //Acá va todo lo que quieren que haga si el login falla (mostrar un toast por ejemplo)
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" w="100%" backgroundColor={COLORESNB.fondos}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Center>
            <LogoPintuki />
            <Heading
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{ color: "warmGray.50" }}
            >
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

            <Button mt="2" colorScheme={COLORESNB.algoScheme} onPress={onClick}>
              Iniciar Sesión
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                ¿Todavia no tenes cuenta?.{" "}
              </Text>
              <Link
                _text={{
                  color: "warning.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation.navigate("SignIn")}
              >
                Registrate!
              </Link>
            </HStack>
            <Text justifyContent="center">Para crear una publicacion necesitas estar registrado</Text>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

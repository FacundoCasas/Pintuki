import React, { createContext, useContext, useState } from "react";
import { getUsuario, addUsuario } from "../services/UsuarioService.js";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    usuario: "",
    contrasenia: "",
    fotoPerfil: "",
    publicacionesFavoritas: [],
    publicacionesCreadas: []
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Comenzaría en false y cambiaría al hacer el login a true

  // Acá iria toda la lógica para obtener los datos del usuario autenticado, signIn, signUp, signOut
  const loginUsuario = async (user, pass) => {
    let clave = { // sugiero cambiar el nombre de este objeto
      username: user,
      password: pass,
    };
    const loguedUser = await getUsuario(clave);
    setUser(loguedUser);
    setIsAuthenticated(true);
  };

  const logOut = () => {
    setUser(
      usuario= "",
      contraseni= "",
      fotoPerfil= "",
      publicacionesFavoritas= [],
      publicacionesCreadas= []
      );
    setIsAuthenticated(false);
  }

  //SIGN IN EN PROCESO
  const signInUsuario = async (usuario, contrasenia) => {
    let usuarioCreado = {
      usuario: usuario,
      contrasenia: contrasenia,
      fotoPerfil: "https://i.ibb.co/KjFFfmq/diego-pintuki-01.jpg",
    };
    usuarioCreado = await addUsuario(usuarioCreado)
  }

  return (
    <UserContext.Provider value={{ user, isAuthenticated, loginUsuario, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext); // Luego se va a poder llamar a los datos del usuario desde cualquier componente de la siguiente manera:    const {user}= useAuth()

export default UserContext;
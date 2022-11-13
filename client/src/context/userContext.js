import React, { createContext, useContext, useState } from "react";
import { getUsuario } from "../services/UsuarioService.js";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
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
    isAuthenticated(true);
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated, loginUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext); // Luego se va a poder llamar a los datos del usuario desde cualquier componente de la siguiente manera:    const {user}= useAuth()

export default UserContext;

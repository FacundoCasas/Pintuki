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
      console.log("aca context")
      const loguedUser = await getUsuario(clave);
      if (loguedUser !== null ){
        setUser(loguedUser);
        setIsAuthenticated(true);
      }else{
        return null
      }
  };

  const logOut = () => {
    setUser(
      usuario = "",
      contraseni = "",
      fotoPerfil = "",
      publicacionesFavoritas = [],
      publicacionesCreadas = []
    );
    setIsAuthenticated(false);
  }

  //SIGN IN EN PROCESO
  const signInUsuario = async (usuario, contrasenia) => {
    //console.log("sign in funcion context", "entro funcion ")
    let usuarioPorCrear = {
      usuario: usuario,
      contrasenia: contrasenia,
      fotoPerfil: "https://i.ibb.co/KjFFfmq/diego-pintuki-01.jpg",
    };
    try{
      const usuarioCreado = await addUsuario(usuarioPorCrear)
      console.log("sign in usuario", usuarioCreado.data)
      if(usuarioCreado !== null){
        setUser(usuarioCreado);
        setIsAuthenticated(true);
      }else{
        return null
      }
      
    }catch(e){

    }
    //console.log("signin context front", "usuario funcion context")
    
  }

  const agregarAFavoritosContext = async (id) => {
    console.log("agregarAFavoritos")
    user.publicacionesFavoritas.push(id);
    console.log(user)
    setUser(user);
  }

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, loginUsuario, logOut, signInUsuario, agregarAFavoritosContext }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext); // Luego se va a poder llamar a los datos del usuario desde cualquier componente de la siguiente manera:    const {user}= useAuth()

export default UserContext;

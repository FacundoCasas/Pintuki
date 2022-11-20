import axios from 'axios'
import { API_USUARIOS,API_USUARIOS_FAVORITOS } from "../utils/Util";

const getUsuario = async (clave) => {
    try{
        console.log("usuario get")
        const response = await axios.post(API_USUARIOS + "/login", {clave});
        //console.log("ServicioFront", response.data)
        return response.data
    }catch(error) {
        console.log("usr service", error)
        throw new error
    }
    
}

const addUsuario = async (usuario) => {
    try{
        console.log("usuario get")
        const response = await axios.post(API_USUARIOS,{usuario});
        //console.log("ServicioFront", response.data)
        console.log(response.data)
        return response.data
    }catch(error) {
        console.log("usr service", error)
        throw new error
    }
}

const agregarFavoritos = async (data) => {
    try {
        return await axios.post(API_USUARIOS_FAVORITOS, { data }).catch(error => console.log(error));
    } catch (error) {
        console.log(error)
        throw new error
    }
}
export {
    getUsuario,
    addUsuario,
    agregarFavoritos
}
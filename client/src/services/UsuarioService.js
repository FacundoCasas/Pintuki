import axios from 'axios'
import { API_USUARIOS,API_USUARIOS_FAVORITOS } from "../utils/Util";

const getUsuario = async (clave) => {
    const response = await axios.post(API_USUARIOS + "/login", {clave}).catch(error => console.log(error));
    //console.log("ServicioFront", response.data)
    return response.data
}

const addUsuario = async (usuario) => {
    return await axios.post(API_USUARIOS,{usuario}).catch(error => console.log(error));
}

const agregarFavoritos = async (data) => {
    try {
        return await axios.post(API_USUARIOS_FAVORITOS, { data }).catch(error => console.log(error));
    } catch (error) {
        console.log(error)
    }
}
export {
    getUsuario,
    addUsuario,
    agregarFavoritos
}
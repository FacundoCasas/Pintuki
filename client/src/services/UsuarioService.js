import axios from 'axios'
import { API_USUARIOS } from "../utils/Util";

const getUsuario = async (clave) => {
    const response = await axios.post(API_USUARIOS + "/login", {clave}).catch(error => console.log(error));
    console.log(response)
    return response.data
}

const addUsuario = async (usuario) => {
    return await axios.post(API_USUARIOS,{usuario}).catch(error => console.log(error));
}

export {
    getUsuario,
    addUsuario
}
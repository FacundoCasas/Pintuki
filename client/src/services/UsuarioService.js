import axios from 'axios'
import { API_USUARIOS } from "../utils/Util";

const getUsuario = async (clave) => {
    const response = await axios.post(API_USUARIOS + "/login", {clave})
    console.log(response)
    return response.data
}

const addUsuario = async (usuario) => {
    return await axios.post(API_USUARIOS,{usuario})
}

export {
    getUsuario,
    addUsuario
}
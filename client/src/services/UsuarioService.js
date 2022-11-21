import axios from 'axios'
import { API_USUARIOS, API_USUARIOS_FAVORITOS } from "../utils/Util";

const getUsuario = async (clave) => {
    try {
        const response = await axios.post(API_USUARIOS + "/login", { clave });
        return response.data
    } catch (error) {
        throw new error
    }

}

const addUsuario = async (usuario) => {
    try {
        const response = await axios.post(API_USUARIOS, { usuario });
        return response.data
    } catch (error) {
        throw new error
    }
}

const agregarFavoritos = async (data) => {
    try {
        return await axios.post(API_USUARIOS_FAVORITOS, { data }).catch(error => console.log(error));
    } catch (error) {
        throw new error
    }
}
export {
    getUsuario,
    addUsuario,
    agregarFavoritos
}
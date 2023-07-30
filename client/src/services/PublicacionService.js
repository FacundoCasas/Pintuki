import axios from 'axios'
import { API_PUBLICACIONES, API_PUBLICACIONES_CATEGORIA } from "../utils/Util";
import { uploadFile } from '../firebase/config';

const getPublicaciones = async () => {
    const response = await axios.get(API_PUBLICACIONES).catch(error => console.log(error));
    return response.data
}

const getPublicacion = async (id) => {
    const response = await axios.get(API_PUBLICACIONES + `/${id}`).catch(error => console.log(error));
    return response.data.publicacion
}

const getPublicacionCategoria = async (categoria) => {
    const response = await axios.get(API_PUBLICACIONES_CATEGORIA + `/${categoria}`).catch(error => console.log(error));
    return response.data.publicacion
}

const postPublicacion = async (publicacion) => {
    /*const uriNueva = uploadImage(publicacion.url)
    console.log("uriNueva firebase:",uriNueva)
    */
    try {
        const result = await uploadFile(publicacion.url)
        publicacion.url = result;
        return await axios.post(API_PUBLICACIONES, { publicacion }).catch(error => console.log(error));
    } catch (error) {
        throw new error
    }
}

const getPublicacionesFavoritas = async (data) => {
    try {
        const response = await axios.post(API_PUBLICACIONES + "/favoritos", { data }).catch(error => console.log(error));
        return response.data
    } catch (error) {
        throw new error
    }
}

const getPublicacionesCreadas = async (usuario) => {
    try {
        const response = await axios.get(API_PUBLICACIONES + `/usuario/${usuario}`).catch(error => console.log(error));
        return response.data
    } catch (error) {
        throw new error
    }
}

export {
    getPublicaciones,
    postPublicacion,
    getPublicacion,
    getPublicacionCategoria,
    getPublicacionesFavoritas,
    getPublicacionesCreadas
}
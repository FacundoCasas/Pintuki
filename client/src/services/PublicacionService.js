import axios from 'axios'
import { API_PUBLICACIONES } from "../utils/Util";

const getPublicaciones = async () => {
    const response = await axios.get(API_PUBLICACIONES)
    return response.data
}

const getPublicacion = async (id) => {
    const response = await axios.get(API_PUBLICACIONES+`/${id}`)
    return response.data
}

const postPublicacion = async (publicacion) => {
    return await axios.post(API_PUBLICACIONES,{publicacion})
}

export {
    getPublicaciones,
    postPublicacion,
    getPublicacion
}
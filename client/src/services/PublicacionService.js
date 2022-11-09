import axios from 'axios'
import { API_PUBLICACIONES } from "../utils/Util";

const getPublicaciones = async () => {
    const response = await axios.get(API_PUBLICACIONES).catch(error => console.log(error));
    return response.data
}

const getPublicacion = async (id) => {
    const response = await axios.get(API_PUBLICACIONES+`/${id}`).catch(error => console.log(error));
    return response.data.publicacion
}

const postPublicacion = async (publicacion) => {
    return await axios.post(API_PUBLICACIONES,{publicacion}).catch(error => console.log(error));
}

export {
    getPublicaciones,
    postPublicacion,
    getPublicacion
}
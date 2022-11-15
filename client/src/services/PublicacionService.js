import axios from 'axios'
import { API_PUBLICACIONES, API_PUBLICACIONES_CATEGORIA } from "../utils/Util";
import { uploadFile } from '../firebase/config';

const getPublicaciones = async () => {
    //console.log('Uri: ',API_PUBLICACIONES)
    const response = await axios.get(API_PUBLICACIONES).catch(error => console.log(error));
    //console.log('axios',response)
    return response.data
}

const getPublicacion = async (id) => {
    //console.log('Uri: ',API_PUBLICACIONES+`/${id}`)
    const response = await axios.get(API_PUBLICACIONES + `/${id}`).catch(error => console.log(error));
    //console.log('axios',response.data.publicacion)
    return response.data.publicacion
}

const getPublicacionCategoria = async (categoria) => {
    const response = await axios.get(API_PUBLICACIONES_CATEGORIA+`/${categoria}`).catch(error => console.log(error));
    return response.data.publicacion
}

const postPublicacion = async (publicacion) => {
    /*const uriNueva = uploadImage(publicacion.url)
    console.log("uriNueva firebase:",uriNueva)
    */
    try {
        const result = await uploadFile(publicacion.url)
        publicacion.url = result;
        console.log("postFirebase:", result)
        return await axios.post(API_PUBLICACIONES, { publicacion }).catch(error => console.log(error));
    } catch (error) {
        console.log(error)
        //mostrar alerta de que fallo al subir
        //ademas no deberia seguir con el otro response
    }
}

export {
    getPublicaciones,
    postPublicacion,
    getPublicacion,
    getPublicacionCategoria
}
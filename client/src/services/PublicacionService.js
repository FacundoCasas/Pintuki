import { API_PUBLICACIONES } from "../utils/Util";

const getPublicaciones = () => {
    console.log("url",API_PUBLICACIONES)
    return fetch(API_PUBLICACIONES);
}

export {
    getPublicaciones
}
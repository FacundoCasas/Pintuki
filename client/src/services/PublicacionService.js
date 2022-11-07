import { API_PUBLICACIONES } from "../utils/Util";

const getPublicaciones = () => {
    return fetch(API_PUBLICACIONES)
}

const getPublicacion = async (id) => {
    return fetch(API_PUBLICACIONES+`/${id}`, {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json()) 
        .then(json => console.log(json)) 
        .catch(err => console.log(err)); 
}

const postPublicacion = async (publicacion) => {
    return fetch(API_PUBLICACIONES, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(publicacion)
        })
        .then(response => response.json()) 
        .then(json => console.log(json)) 
        .catch(err => console.log(err)); 
}

export {
    getPublicaciones,
    postPublicacion,
    getPublicacion
}
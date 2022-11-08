import { API_USUARIOS } from "../utils/Util";

//get con id?
const getUsuario = async (usuario) => {
    return fetch(API_USUARIOS, {
        method: "GET",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
        })
        .then(response => response.json()) 
        .then(json => console.log(json)) 
        .catch(err => console.log(err)); 
}


const postUsuario = async (usuario) => {
    return fetch(API_USUARIOS, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
        })
        .then(response => response.json()) 
        .then(json => console.log(json)) 
        .catch(err => console.log(err)); 
}

export {
    getUsuario,
    postUsuario
} 
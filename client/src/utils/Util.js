//URLS para consumir del Back
//Llenar con la IP, poner ipconfig en la  consola, levantar con expo start --tunnel
//Guia const HOST_URL = 'http://192.168.0.55:3000';
const HOST_URL = 'https://pintuki.onrender.com';
//const HOST_URL = 'http://192.168.0.142:3000';
//const HOST_URL = 'http://localhost:3000';

const API_PUBLICACIONES = HOST_URL + '/publicaciones';
const API_CATEGORIAS = HOST_URL + '/categorias';
const API_USUARIOS = HOST_URL + '/usuarios';

export { API_PUBLICACIONES, API_CATEGORIAS, API_USUARIOS }



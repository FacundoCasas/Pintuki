//URLS para consumir del Back
//Llenar con la IP, poner ipconfig en la  consola, levantar con expo start --tunnel
const HOST_URL = 'https://pintuki.onrender.com';
//const HOST_URL = 'http://ip:3000';

const API_PUBLICACIONES = HOST_URL + '/publicaciones';
const API_CATEGORIAS = HOST_URL + '/categorias';
const API_USUARIOS = HOST_URL + '/usuarios';
const API_USUARIOS_FAVORITOS = API_USUARIOS + '/favoritos';

export { API_PUBLICACIONES,API_USUARIOS_FAVORITOS, API_CATEGORIAS, API_USUARIOS }



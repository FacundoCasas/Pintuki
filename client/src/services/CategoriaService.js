import axios from 'axios'
import { API_CATEGORIAS } from "../utils/Util";

const getCategorias = async () => {
    const response = await axios.get(API_CATEGORIAS)
    return response.data
}

const getCategoria = async (id) => {
    const response = await axios.get(API_CATEGORIAS+`/${id}`)
    return response.data
}

const postCategoria = async (categoria) => {
    return await axios.post(API_CATEGORIAS,{categoria})
}

export {
    getCategorias,
    getCategoria,
    postCategoria
}
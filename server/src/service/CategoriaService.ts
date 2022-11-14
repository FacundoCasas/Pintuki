import Categoria from "../models/Categoria";
import CategoriaRepository from "../repository/CategoriaRepository";

class CategoriaService {
    categoriaRepository : CategoriaRepository = new CategoriaRepository();

    async findAll() {
        return await this.categoriaRepository.findAll();
    }

    async add(c : any) {
        return await this.categoriaRepository.add(new Categoria(c.id, c.titulo, c.url));
    }                                               
    async get(clave : any) {
        try {
            return await this.categoriaRepository.get(Number(clave));
        } catch(e) {
            throw e
        }
    }

    // tratar de usar bajas logicas
    async delete(clave: any) {
        return await this.categoriaRepository.delete(Number(clave));
    }


}

export default CategoriaService
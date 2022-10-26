import Publicacion from "../models/Publicacion";
import PublicacionRepository from "../repository/PublicacionRepository";

class PublicacionService {
    publicacionRepository : PublicacionRepository = new PublicacionRepository();

    async findAll() {
        return await this.publicacionRepository.findAll();
    }

    async add(p : any) {
        // mapper de personaDto a Persona
        return await this.publicacionRepository.add(new Publicacion(p.body.id, p.body.url,p.body.title,p.body.autor,p.body.etiquetas));
    }                                               
    async get(clave : any) {
        try {
            return await this.publicacionRepository.get(Number(clave));
        } catch(e) {
            throw e
        }
    }

    // tratar de usar bajas logicas
    async delete(clave: any) {
        return await this.publicacionRepository.delete(Number(clave));
    }


}

export default PublicacionService
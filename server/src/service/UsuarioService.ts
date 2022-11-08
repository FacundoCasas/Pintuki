import Usuario from "../models/Usuario";
import UsuarioRepository from "../repository/UsuarioRepository";

class UsarioService {
    usuarioRepository : UsuarioRepository = new UsuarioRepository();

    async findAll() {
        return await this.usuarioRepository.findAll();
    }

    async add(u : any) {
        // mapper de personaDto a Persona
        return await this.usuarioRepository.add(new Usuario(u.id, u.usuario, u.contrasenia, "https://i.ibb.co/KjFFfmq/diego-pintuki-01.jpg"));
        //u.fotoPerfil
    }                                               
    async get(clave : any) {
        try {
            return await this.usuarioRepository.get(Number(clave));
        } catch(e) {
            throw e
        }
    }

    // tratar de usar bajas logicas
    async delete(clave: any) {
        return await this.usuarioRepository.delete(Number(clave));
    }

    async login(clave : any) {
        try {
            return await this.usuarioRepository.login((clave));
        } catch(e) {
            throw e
        }
    }
}

export default UsarioService
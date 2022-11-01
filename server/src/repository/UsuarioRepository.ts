import Usuario from "../models/Usuario";
import Dao from "./Dao";
import ConectarMongoDb from "../database/ConectarMongoDb";
const uri = "mongodb://localhost/pintuki"

class UsuarioRepository implements Dao<Usuario,Number> {

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();
    // futura conexion a mongodb

    async add (element: Usuario) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        await collection.insertOne(element);
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(true);
    }

    async findAll () : Promise<Usuario[]> {
        const usuarios : Array<Usuario> = [];
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        const findResult = await collection.find({}).toArray();
        // mapper
        findResult.forEach( u => usuarios.push( 
            new Usuario(u.id, u.usuario, u.contrasenia, u.publicacionesFavoritas, u.publicacionesCreadas, u.fotoPerfil)
        ));
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(usuarios);
    }

    async get (clave: Number) : Promise<Usuario> {
        // podria haber un try catch y finally para cerrar la conexion
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        const findResult = await collection.findOne({id:clave});
        await this.conectarMongoDb.desconectar();
        if(findResult !== null) {
            return Promise.resolve(new Usuario(findResult.id,findResult.usuario,findResult.contrasenia,findResult.publicacionesFavoritas, findResult.publicacionesCreadas, findResult.fotoPerfil));
        } else {
            throw new Error("No encontrado");            
        }
    }
    
    // tratar de usar bajas logicas
    async delete (clave: Number) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('usuario');
        // puede ser también deleteOne  (depende el contexto de diseño del sistema)
        const findResult = await collection.deleteOne({id:clave});
        await this.conectarMongoDb.desconectar();
        if(findResult !== null) {
            return Promise.resolve(true);
        } else {
            throw new Error("No encontrado");            
        }
    }
}
export default UsuarioRepository
import Publicacion from "../models/Publicacion";
import Dao from "./Dao";
import ConectarMongoDb from "../database/ConectarMongoDb";
const uri = "mongodb://localhost/pintuki"

class PublicacionRepository implements Dao<Publicacion,Number> {

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();
    // futura conexion a mongodb

    async add (element: Publicacion) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('publicacion');
        await collection.insertOne(element);
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(true);
    }

    async findAll () : Promise<Publicacion[]> {
        const publicaciones : Array<Publicacion> = [];
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('publicacion');
        const findResult = await collection.find({}).toArray();
        // mapper
        findResult.forEach( p => publicaciones.push( 
            new Publicacion(p.id,p.url,p.titulo,p.autor, p.etiquetas)
        ));
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(publicaciones);
    }

    async get (clave: Number) : Promise<Publicacion> {
        // podria haber un try catch y finally para cerrar la conexion
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('publicacion');
        const findResult = await collection.findOne({id:clave});
        await this.conectarMongoDb.desconectar();
        if(findResult !== null) {
            return Promise.resolve(new Publicacion(findResult.id,findResult.url,findResult.titulo,findResult.autor, findResult.etiquetas));
        } else {
            throw new Error("No encontrado");            
        }
    }
    
    // tratar de usar bajas logicas
    async delete (clave: Number) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('publicacion');
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
export default PublicacionRepository
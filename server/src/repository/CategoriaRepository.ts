import Categoria from "../models/Categoria";
import Dao from "./Dao";
import ConectarMongoDb from "../database/ConectarMongoDb";
const uri = "mongodb://localhost/pintuki"

class CategoriaRepository implements Dao<Categoria,Number> {

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();
    // futura conexion a mongodb

    async add (element: Categoria) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('categoria');
        await collection.insertOne(element);
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(true);
    }

    async findAll () : Promise<Categoria[]> {
        const categorias : Array<Categoria> = [];
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('categoria');
        const findResult = await collection.find({}).toArray();
        // mapper
        findResult.forEach( c => categorias.push( 
            new Categoria(c.id,c.titulo,c.url)
        ));
        await this.conectarMongoDb.desconectar();
        return Promise.resolve(categorias);
    }

    async get (clave: Number) : Promise<Categoria> {
        // podria haber un try catch y finally para cerrar la conexion
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('categoria');
        const findResult = await collection.findOne({id:clave});
        await this.conectarMongoDb.desconectar();
        if(findResult !== null) {
            return Promise.resolve(new Categoria(findResult.id,findResult.titulo,findResult.url));
        } else {
            throw new Error("No encontrado");            
        }
    }
    
    // tratar de usar bajas logicas
    async delete (clave: Number) : Promise<Boolean> {
        const conexion = await this.conectarMongoDb.conectar();       
        const collection = conexion.collection('categoria');
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
export default CategoriaRepository;
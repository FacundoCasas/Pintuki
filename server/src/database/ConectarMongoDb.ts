import { MongoClient } from 'mongodb';
import { mongodb } from './Keys';

class ConectarMongoDb {
    private client = new MongoClient(mongodb.URI);

    async conectar(){
        try{
            await this.client.connect();
            const db = this.client.db(mongodb.db);
            return db;
        }catch(e){
            throw 'Error de conexion';
        }
    }

    async desconectar(){
        try{
            await this.client.close();
        }catch(e){
            throw 'error al cerrar la conexion';
        }
    }
}


export default ConectarMongoDb
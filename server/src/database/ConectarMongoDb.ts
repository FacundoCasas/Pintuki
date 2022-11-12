import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv'
dotenv.config({path:'variables.env'})
class ConectarMongoDb {
    
    private client = new MongoClient(process.env.DB_URL);
    
    async conectar(){
        try{
            await this.client.connect();
            const db = this.client.db("pintuki");
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
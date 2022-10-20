import PublicacionReducida from "../models/PublicacionReducida";
import Dao from "./Dao";

class PublicacionDaoMemoria implements Dao<PublicacionReducida,Number> {
    private publicaciones: Array<PublicacionReducida> = [];
    // futura conexion a mongodb

    add (element: PublicacionReducida) : Promise<Boolean> {
        this.publicaciones.push(element);
        return Promise.resolve(true);
    }
    findAll () : Promise<PublicacionReducida[]> {
        return Promise.resolve(this.publicaciones);
    }
    get (clave: Number) : Promise<PublicacionReducida> {
        return Promise.resolve(this.publicaciones
            .filter( p => p.getId() == clave )[0]);
    }
    delete (clave: Number) : Promise<Boolean> {
        this.publicaciones = this.publicaciones.filter(
            p => p.getId() != clave )
        return Promise.resolve(true);
    }
    
}
export default PublicacionDaoMemoria
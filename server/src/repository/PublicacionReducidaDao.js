class PublicacionDaoMemoria {
    constructor() {
        this.publicaciones = [];
    }
    // futura conexion a mongodb
    add(element) {
        this.publicaciones.push(element);
        return Promise.resolve(true);
    }
    findAll() {
        return Promise.resolve(this.publicaciones);
    }
    get(clave) {
        return Promise.resolve(this.publicaciones
            .filter(p => p.getId() == clave)[0]);
    }
    delete(clave) {
        this.publicaciones = this.publicaciones.filter(p => p.getId() != clave);
        return Promise.resolve(true);
    }
}
export default PublicacionDaoMemoria;

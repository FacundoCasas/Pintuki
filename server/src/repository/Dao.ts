interface Dao<E,K> {
    add: (element: E) => Promise<Boolean>;
    findAll: () => Promise<Array<E>>;
    get: (clave: K) => Promise<E>;    
    delete: (clave: K) => Promise<Boolean>;
}
export default Dao
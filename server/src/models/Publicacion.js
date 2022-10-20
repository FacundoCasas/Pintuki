class Publicacion {
    constructor(id, url, titulo, descripcion, likes, autor, etiquetas) {
        this.url = url;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.likes = likes;
        this.autor = autor;
        this.etiquetas = etiquetas;
        this.id = id;
    }
    //aniadir geters y seters
    getId() {
        return this.id;
    }
    getUrl() {
        return this.url;
    }
    getTitulo() {
        return this.titulo;
    }
}
export default Publicacion;

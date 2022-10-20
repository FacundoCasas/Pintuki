class PublicacionReducida {
    constructor(id, url, likes, autor) {
        this.url = url;
        this.id = id;
        this.autor = autor;
        this.likes = likes;
    }
    //aniadir geters y seters
    getId() {
        return this.id;
    }
    getUrl() {
        return this.url;
    }
}
export default PublicacionReducida;

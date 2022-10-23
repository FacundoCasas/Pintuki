class Publicacion {
    //cambiar tipo de autor y etiqueta
    private id : number;
    private url: string;
    private titulo: String;
    private autor: string;
    private etiquetas:string;
    constructor(id:number,url: string,titulo: String, autor:string, etiquetas:string) {
        this.url = url;
        this.titulo = titulo;
        this.autor = autor;
        this.etiquetas = etiquetas;
        this.id = id;
    }

    //aniadir geters y seters

    public getId(): number {
        return this.id;
    }

    public getUrl(): string {
        return this.url;
    }
    public getTitulo(): String {
        return this.titulo;
    }
}
export default Publicacion;
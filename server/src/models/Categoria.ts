class Categoria {
    private id: number;
    private titulo: string;
    private url: string;
    constructor(id:number, titulo:string, url:string ) {
        this.id = id;
        this.titulo = titulo;
        this.url = url;
    }

    public getId(): number {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getUrl(): string {
        return this.url;
    }

}
export default Categoria;
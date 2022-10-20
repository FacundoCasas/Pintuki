class PublicacionReducida {
    //cambiar tipo de autor 
    private id : number;
    private url: string;
    private autor: String;
    private likes: number;

    constructor(id:number,url: string, likes: number,autor:string) {
        this.url = url;
        this.id = id;
        this.autor = autor;
        this.likes = likes;
    }

    //aniadir geters y seters

    public getId(): number {
        return this.id;
    }

    public getUrl(): string {
        return this.url;
    }

}
export default PublicacionReducida;
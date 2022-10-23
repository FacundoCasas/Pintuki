class PublicacionReducida {
    //cambiar tipo de autor 
    private id : number;
    private url: string;

    constructor(id:number,url: string) {
        this.url = url;
        this.id = id;
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
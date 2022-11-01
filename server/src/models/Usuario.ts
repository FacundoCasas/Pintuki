import Publicacion from "./Publicacion";

class Usuario {
    //cambiar tipo de autor y etiqueta
    private id : number;
    private usuario: string;
    private contrasenia: string;
    private publicacionesFavoritas: Publicacion[];
    private publicacionesCreadas: Publicacion[];
    private fotoPerfil: string;
    constructor(id:number,usuario: string,contrasenia: string, publicacionesFavoritas:Publicacion[], publicacionesCreadas:Publicacion[], fotoPerfil: string) {
        this.id = id;
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.publicacionesFavoritas = publicacionesFavoritas;
        this.publicacionesCreadas = publicacionesCreadas;
        this.fotoPerfil = fotoPerfil;
    }

    //aniadir geters y seters
    public getId(): number {
        return this.id;
    }

    public getUsuario(): string {
        return this.usuario;
    }
    //modificar a privado o eso se hace en el service?
    public getContrasenia(): string {
        return this.contrasenia;
    }
    public getPublicacionesFavoritas(): Publicacion[] {
        return this.publicacionesFavoritas;
    }
    public getPublicacionesCreadas(): Publicacion[] {
        return this.publicacionesCreadas;
    }
    public getFotoPerfil(): string {
        return this.fotoPerfil;
    }
}
export default Usuario;
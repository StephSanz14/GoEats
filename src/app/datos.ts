/* para crear una interface es buena practica para que nos este checando los tipos de datos y no tener un error*/
/* se tiene una mejor organizacion poniendolo en un archivo externo, esta interface ayuda a declarar tipo de datos en diferentes componentes */
export interface Datos{
    nombre:string;
    precio:number;
    imagen:string;
    tipo: string;
    cantidad:number;
    descripcion:string;
    mensaje:string;
}
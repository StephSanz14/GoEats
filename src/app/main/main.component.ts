import { Component } from '@angular/core';
import { Datos } from '../datos';
import { FormsModule, } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule], /* aqui agregamos el FormsModule y me genera autom'aticamente el import*/
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  /* Declaración de variables */
  nombre:string='';
  precio:number=0;
  imagen:string='';
  tipo:string='';
  cantidad:number=0;
  descripcion:string="";
  mensaje:string="";

  filtro: Datos[] = []; // Arreglo para almacenar los resultados filtrados


  /* creacion de interface: creamos un archivo nuevo en la carpeta app con .ts lo llamamos en esta ocasion "datos.ts"*/
  /* creación de un array enlazando la interface*/
  alimentos:Datos[]=[
    {nombre:'Huevos estrellados',precio:120,imagen:"/assets/8.png",tipo:'desayuno',cantidad:4,descripcion:"Huevo estrellado frito, con clara dorada y yema suave, servido con acompañamientos al gusto.",mensaje:"Disponible"},
    {nombre:'Filete con champiñones',precio:120,imagen:"/assets/11.png", tipo:'comida',cantidad:4, descripcion:"Filete jugoso acompañado de champiñones salteados en su salsa, una combinación deliciosa y reconfortante.",mensaje:"Disponible"},
    {nombre:"sincronizada",precio:120,imagen:"/assets/14.png", tipo: 'cena',cantidad:4, descripcion:"Sincronizada de tortilla rellena de jamón y queso, grillada hasta quedar dorada y crujiente.",mensaje:"Disponible"}
  ]

  ngOnInit(): void {
    this.tipo="desayuno";
    this.filtro=this.alimentos.filter(alimento => alimento.tipo === "desayuno");;/* ngOnInit() es útil cuando necesitas realizar configuraciones iniciales en tu componente, especialmente si esas configuraciones dependen de datos o propiedades inicializadas en el ciclo de vida del componente. */
  }


  agregarDatos():void{ 
    let platillo:Datos={ /* Este es mi objeto */
      nombre: this.nombre, /* atención al principio marcará error por que hay que estar atentos a declarar las variables como vallamos implementando */
      precio: this.precio,
      imagen: this.imagen,
      tipo: this.tipo,
      cantidad: this.cantidad,
      descripcion: this.descripcion,
      mensaje:this.mensaje
    }
    
      /* codigo para insertar alimentos */
    this.alimentos.push(platillo);
    this.nombre=''; /* codigo para limpiar la cajita */
    this.precio=0;
    this.imagen='';
    this.cantidad=0;
    this.descripcion='';
    this.buscandoTipo(this.tipo);
    /* Codigo paura verificar disponibilidad */
      if (this.cantidad>0) {
        this.mensaje="Disponible"
      } else {
        this.mensaje="No disponible"
      }
  }

  limpiarDatos():void{
    this.nombre=''; 
    this.precio=0;
    this.imagen='';
    this.cantidad=0;
    this.descripcion='';
  }

  buscandoTipo(tipo:string):void{
    this.filtro = this.alimentos.filter(alimento => alimento.tipo === tipo);
  }

  // Método para actualizar la cantidad del alimento en el array filtro
actualizarCantidad(index: number, nuevaCantidad: number): void {
  // Encontramos el alimento en el filtro usando el índice
  this.filtro[index].cantidad = nuevaCantidad;
  if (nuevaCantidad>0) {
    this.filtro[index].mensaje="Disponible"
  }
  else{
    this.filtro[index].mensaje="No disponible";
  }
}

/* codigo para seleccionar la imagen */
onImageChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
  const reader = new FileReader();
  reader.onload = ( ) => {
  this.imagen = reader.result as string;
  };
  reader.readAsDataURL(file); 
  }//fin del if
  }//fin del metodo
}


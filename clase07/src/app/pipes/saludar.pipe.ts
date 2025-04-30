import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saludar'
})
export class SaludarPipe implements PipeTransform {

  transform(nombre: string, 
    saludo: string = "Hola " , 
    titulo: string = " ", 
    final: "!" | "?" = "!"): string {
    return saludo + titulo + nombre + final;
  }
}

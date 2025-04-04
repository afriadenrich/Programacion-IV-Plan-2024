import { Component, input, InputSignal } from '@angular/core';
import { Boton } from '../../interfaces/boton';

@Component({
  selector: 'app-listado-botones',
  imports: [],
  templateUrl: './listado-botones.component.html',
  styleUrl: './listado-botones.component.css'
})
export class ListadoBotonesComponent {
  botones: InputSignal<Boton[]> = input([{
    nombre: "Block",
    letra: "B"
  }, {
    nombre: "Class",
    letra: "C"
  }, {
    nombre: "Decorator",
    letra: "@"
  }, {
    nombre: "", 
    letra: ""
  }] as Boton[]);
}

// 1- any -> cualquier cosa
// 2- estructura / clase / interfaz para definir el tipo
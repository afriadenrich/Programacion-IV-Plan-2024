import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-botones',
  imports: [],
  templateUrl: './listado-botones.component.html',
  styleUrl: './listado-botones.component.css'
})
export class ListadoBotonesComponent {
  botones = [{
    nombre: "Block",
    letra: "B"
  }, {
    nombre: "Class",
    letra: "C"
  }, {
    nombre: "Decorator",
    letra: "@"
  }];
}

import { Component } from '@angular/core';
import { ListadoBotonesComponent } from "../../components/listado-botones/listado-botones.component";
import { Boton } from '../../interfaces/boton';

@Component({
  selector: 'app-listado',
  imports: [ListadoBotonesComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
otroListado: Boton[] = [{
  nombre: "Block",
  letra: "B"
}];
}

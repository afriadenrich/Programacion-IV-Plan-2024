import { Component } from '@angular/core';
import { ListadoPersonaComponent } from "./listado-persona/listado-persona.component";
import { AltaPersonaComponent } from "./alta-persona/alta-persona.component";
import { DetallePersonaComponent } from "./detalle-persona/detalle-persona.component";

@Component({
  selector: 'app-personas',
  imports: [ListadoPersonaComponent, AltaPersonaComponent, DetallePersonaComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  personas = ["Agus", "Octavio", "Franco"];

  recibirNombre(nombre: string){
    console.log("Recibo el valor")
    this.personas.push(nombre);
  }
}

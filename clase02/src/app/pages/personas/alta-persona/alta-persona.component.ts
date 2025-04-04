import { Component, output } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-alta-persona',
  imports: [FormsModule],
  templateUrl: './alta-persona.component.html',
  styleUrl: './alta-persona.component.css'
})
export class AltaPersonaComponent {
  nombreEvento = output<string>();
  nombre = "Fulano";

  guardar(){
    // guarde
    console.log("Le doy a guardar")
    this.nombreEvento.emit(this.nombre);

    // borre
    this.nombre = "";
  }
}

import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-listado-persona',
  imports: [],
  templateUrl: './listado-persona.component.html',
  styleUrl: './listado-persona.component.css'
})
export class ListadoPersonaComponent {
  personas: InputSignal<string[]> = input([] as string[]);
}



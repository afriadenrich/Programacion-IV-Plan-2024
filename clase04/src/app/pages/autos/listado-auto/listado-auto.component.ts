import { Component, input, output } from '@angular/core';
import { Auto } from '../../../classes/auto';

@Component({
  selector: 'app-listado-auto',
  imports: [],
  templateUrl: './listado-auto.component.html',
  styleUrl: './listado-auto.component.css'
})
export class ListadoAutoComponent {
  autos = input<Auto[]>([]);
  enviarUnAuto = output<Auto>();
  enviarUnIndice = output<number>();

  seleccionarUnAuto(auto: Auto){
    this.enviarUnAuto.emit(auto);
    const concatenacion = "El auto con la marca " + auto.marca + " es del modelo "+ auto.modelo; 
    const otraConc = `El auto con la marca ${auto.marca} es del modelo ${auto.modelo}`; 
  }

  seleccionarUnInidice(indice: number){
    this.enviarUnIndice.emit(indice);
  }
}

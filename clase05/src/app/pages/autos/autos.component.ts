import { Component } from '@angular/core';
import { Auto }from "../../classes/auto";
import { AltaAutoComponent } from './alta-auto/alta-auto.component';
import { ListadoAutoComponent } from './listado-auto/listado-auto.component';
import { DetalleAutoComponent } from './detalle-auto/detalle-auto.component';

@Component({
  selector: 'app-autos',
  imports: [AltaAutoComponent, ListadoAutoComponent, DetalleAutoComponent],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
  autos: Auto[] = [new Auto("Auti", "33", 1000), new Auto("BMV", "55", 2000), new Auto("Ferrar", "F", 3000)]

  agregarAuto(auto: Auto) {
    this.autos.push(auto);
  }

  autoSelecionado?: Auto;

  obtenerAutoSeleccionado(auto: Auto){
    this.autoSelecionado = auto;
  }

  eliminar(inidice: number){
    this.autos.splice(inidice, 1);
  }
}

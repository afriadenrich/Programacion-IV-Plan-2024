import { Component, input } from '@angular/core';
import { Auto } from '../../../classes/auto';

@Component({
  selector: 'app-detalle-auto',
  imports: [],
  templateUrl: './detalle-auto.component.html',
  styleUrl: './detalle-auto.component.css'
})
export class DetalleAutoComponent {
  auto = input<Auto>();
}

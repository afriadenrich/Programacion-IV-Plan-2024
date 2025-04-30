import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SaludarPipe } from '../../pipes/saludar.pipe';
import { ResaltarDirective } from '../../directives/resaltar.directive';

@Component({
  selector: 'app-tema',
  imports: [CurrencyPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, DatePipe, JsonPipe, PercentPipe, SaludarPipe, NgClass, NgStyle, ResaltarDirective],
  templateUrl: './tema.component.html',
  styleUrl: './tema.component.css'
})
export class TemaComponent {
  moneda: number = 1000000.57;
  palabra: string = "Hola"
  frase: string = "Hola que tal";
  fraseLarga: string = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";
  fechaNumero: number = 1745972861708; //Date.now();
  fecha: Date = new Date();
  usuario: any = { nombre: "Agus", apellido: "F"}
}

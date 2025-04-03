import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  imagen = input("tren1.jpg");
  // texto = "Tren 1";
  texto : InputSignal<string> = input("Tren 1");
  link = input("https://google.com");
}

// ng g c components/card

// input -> Entrada de datos

import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-info',
  imports: [CardComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  textoEnPadre = "Tren 2";
  imagenEnPadre = "tren2.jpg";
  linkEnPadre = "https://meet.google.com";
}

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { JsonPipe } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  auth = inject(AuthService);
  variableColor = "#004499";
  title = "Hola mundo";
  
  constructor() {
    //  this.auth.crearCuenta("cualquiera@mail.com", "123456", "Pepito");
  }
  iniciarSesion() {
    this.auth.iniciarSesion("algo@mail.com", "123456");
  }

  cerrarSesion() {
    this.auth.cerrarSesion();
  }

  crearCuenta() {
    console.log("Se crea");
    this.auth.crearCuenta("algo@mail.com", "123456", "Agus2");
  }
}

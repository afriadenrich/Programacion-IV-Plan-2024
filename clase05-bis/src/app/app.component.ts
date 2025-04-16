import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase05-bis';

  authService = inject(AuthService);

  ngOnInit(){
  }
  
  crearCuenta(){
    this.authService.crearCuenta("a.friadenrich@sistemas-utnfra.com.ar", "123456789");
  }
  
  iniciarSesion(){
    this.authService.iniciarSesion("a.friadenrich@sistemas-utnfra.com.ar", "123456789");
  }

  cerrarSesion(){
    this.authService.cerrarSesion();
  }
}

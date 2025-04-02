import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { BienvenidaComponent } from '../bienvenida/bienvenida.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  imports: [FormsModule, BienvenidaComponent, LoginComponent],
  templateUrl: './bindeos.component.html',
  styleUrl: './bindeos.component.css'
})
export class BindeosComponent {
  constructor() {
    // this.mostrarTitle()
   }
   estilos = "rojo";
   title = "Lo que sea";
   nombre = "ALGO MAS";
 
   mostrarTitle() {
     this.estilos = "verde";
     console.log(this.title);
   }
 
   borrarNombre(){
     this.nombre = "";
   }
}

import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent implements OnInit, OnDestroy, AfterContentInit {
  constructor() {
    console.log("Se ejecuta el constructor de Bienvenida");
  }
    
  ngOnInit(){
    console.log("Se ejecuta el OnInit de Bienvenida");
  }
  
  ngOnDestroy(): void {
    console.log("Se ejecuta el OnDestroy de Bienvenida");
  }
  
  ngAfterContentInit(): void {
    console.log("Se ejecuta el ngAfterContentInit de Bienvenida");
  }
}

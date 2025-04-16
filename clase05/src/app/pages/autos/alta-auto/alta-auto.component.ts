import { Component, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auto } from '../../../classes/auto';

@Component({
  selector: 'app-alta-auto',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './alta-auto.component.html',
  styleUrl: './alta-auto.component.css'
})
export class AltaAutoComponent {
  formulario: FormGroup;
  enviarAuto = output<Auto>();

  constructor() {
    this.formulario = new FormGroup({
      marca: new FormControl("", [Validators.required]),
      modelo: new FormControl("", [Validators.required]),
      precio: new FormControl(0, [Validators.min(1)])
    });
  }

  guardar() {
    if(!this.formulario.valid) return;

    const auto: Auto = new Auto(
      this.formulario.value.marca, 
      this.modelo, 
      this.formulario.value.precio);

      console.log(auto);

      // Enviarlo al parent
      this.enviarAuto.emit(auto);
  }

  get modelo(){
    return this.formulario.controls["modelo"].value;
  }
}

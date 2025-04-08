import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-registro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  formulario?: FormGroup;

  ngOnInit(){
   // const formBuilder = new FormBuilder();
   // const formulario = formBuilder.group({ ... });
    
   this.formulario = new FormGroup({
     nombre: new FormControl("", 
      { validators: [Validators.minLength(3), Validators.required, Validators.maxLength(15)] }),
     apellido: new FormControl("", 
      { validators: [Validators.minLength(5), Validators.maxLength(10), Validators.required]})
    })
  }

  mostrarFormulario(){
    console.log(this.formulario);
    console.log(this.formulario?.controls);
  }

  validarFormulario(){
    console.log("Es válido: " + this.formulario?.valid);
    console.log(this.formulario?.controls["nombre"].errors);
    console.log(this.formulario?.controls["apellido"].errors);
  }

  guardarDatos(){
    if(!this.formulario?.valid) return;

// TODO OK!

    console.log(this.formulario.value);

  }

  get nombre() {
    return this.formulario?.get("nombre");
  }
  get apellido() {
    return this.formulario?.get("apellido");
  }
}

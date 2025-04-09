import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  // Servicios:
  // Injectar el servicio
  // Antes
  // constructor(private auth: AuthService, private x: AlgoService,) {
  //   console.log(auth.usuario);
  // }

  // Ahora
  auth = inject(AuthService);

  // Formularios:
  formulario?: FormGroup;

  ngOnInit(){
   // const formBuilder = new FormBuilder();
   // const formulario = formBuilder.group({ ... });
   console.log(this.auth.usuario);

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
    this.auth.guardarUsuario(this.nombre?.value, this.apellido?.value);
  }

  get nombre() {
    return this.formulario?.get("nombre");
  }
  get apellido() {
    return this.formulario?.get("apellido");
  }
}

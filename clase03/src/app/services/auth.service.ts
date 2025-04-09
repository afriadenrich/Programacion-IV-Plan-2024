import { Injectable } from '@angular/core';

// Clases que siguen el patrón SINGLETON

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario = {
    nombre: "Agus",
    apellido: "UTN"
  }

  guardarUsuario(nombre: string, apellido: string) {
    this.usuario.nombre = nombre;
    this.usuario.apellido = apellido;
  }
}

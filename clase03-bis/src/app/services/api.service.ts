import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Injectar el servicio de HTTPClient
  httpClient = inject(HttpClient);

  pokemonActual: any;

  // Utiliar el httpclient para traer algo

  constructor() { }

  traerPorNombre(nombre: string) {
    // Crear petición
    const peticion: Observable<any> = this.httpClient.get<any>("https://pokeapi.co/api/v2/pokemon/" + nombre)

    // Suscribirse y definir acción al recibir respuesta
    const suscripcion: Subscription = peticion.subscribe((respuesta) => {
      this.pokemonActual = respuesta; 

      // Cerrar la suscripción
      suscripcion.unsubscribe();
    });
  }
}

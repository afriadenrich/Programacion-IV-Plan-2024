import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpClient = inject(HttpClient);

  constructor() {}

  // POST a entidad/
  crear(archivo: File) {
    const formData = new FormData();

    formData.append('nombre', 'agus');
    formData.append('apellido', 'f');
    formData.append('foto', archivo, archivo.name);

    this.httpClient
      .post(environment.api_url + 'entidad', formData)
      .subscribe((data) => {
        console.log(data);
      });
  }

  // GET a entidad/
  traer() {
    this.httpClient.get(environment.api_url + 'entidad').subscribe((datos) => {
      console.log(datos);
    });
  }

  traerPorId(id: number) {
    this.httpClient
      .get(environment.api_url + 'entidad/' + id)
      .subscribe((datos) => {
        console.log(datos);
      });
  }

  modificarPorId(id: number) {
    this.httpClient
      .put(environment.api_url + 'entidad/' + id, {
        clave: 'Valor',
        nombre: 'apellido',
      })
      .subscribe((data) => {
        console.log(data);
      });
  }

  eliminar(id: number) {
    this.httpClient
      .delete(environment.api_url + 'entidad/' + id)
      .subscribe((data) => {
        console.log(data);
      });
  }
}

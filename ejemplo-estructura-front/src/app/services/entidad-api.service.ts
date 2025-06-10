import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EntidadApiService {
  constructor() {}

  http = inject(HttpClient);

  crearApi(formulario: FormGroup) {}

  traerTodosApi() {
    const url = 'http://localhost:3000/publicaciones';
    const metodo = 'GET';

    this.http.get(url).subscribe((dato) => {
      console.log(dato);
    });
  }
}

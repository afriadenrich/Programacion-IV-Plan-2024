import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clase13-front';
  apiService = inject(ApiService);
  archivo?: File;

  ngOnInit() {
    this.apiService.traer();
    this.apiService.traerPorId(99);
    this.apiService.modificarPorId(100);
  }

  subir() {
    if (this.archivo) {
      this.apiService.crear(this.archivo);
    }
  }

  cargaDeImagen(event: any) {
    if (event.target && event.target.files) {
      console.log(event.target.files[0]);
      this.archivo = event.target.files[0];
    }
  }
}

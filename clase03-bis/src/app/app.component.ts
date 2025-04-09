import { Component, inject } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  apiService = inject(ApiService);
  nombre = "";

  traer() {
    this.apiService.traerPorNombre(this.nombre);
  }
}

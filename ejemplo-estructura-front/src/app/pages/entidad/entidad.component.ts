import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntidadApiService } from '../../services/entidad-api.service';

@Component({
  selector: 'app-entidad',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './entidad.component.html',
  styleUrl: './entidad.component.css',
})
export class EntidadComponent {
  formBuilder = inject(FormBuilder);
  entidadService = inject(EntidadApiService);

  formulario = this.formBuilder.group({});

  crear() {
    this.entidadService.crearApi(this.formulario);
  }

  traerListado() {
    this.entidadService.traerTodosApi();
  }
}

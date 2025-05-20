import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-upload',
  imports: [FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  buffer?: ArrayBuffer;
  storage = inject(StorageService);

  async onChange($event: any) {
    if($event.target.files[0]){
      const archivo: File = $event.target.files[0];
      
      this.buffer = await archivo.arrayBuffer();

      // image/jpg buffer...
    }
  }

  guardar() {
    if(this.buffer) {      
      this.storage.guardar(this.buffer);
    }
  }
}

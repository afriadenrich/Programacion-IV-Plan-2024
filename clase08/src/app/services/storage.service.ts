import {inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService { 
    auth = inject(AuthService);
    
    async guardar(buffer: ArrayBuffer) {
      const {data, error} = await this.auth.supabase.storage.from("imagenes-perfil").upload("imagen5.jpg", buffer, {
        contentType: "image/jpg"
      });
      if (error) {
        // Handle error
        console.log(error);
      } else {
        console.log(data);
        // Handle success
        const imagenPublica = await this.auth.supabase.storage.from("imagenes-perfil").getPublicUrl(data.path);
        window.open(imagenPublica.data.publicUrl, "_blank");
      }
    }
}
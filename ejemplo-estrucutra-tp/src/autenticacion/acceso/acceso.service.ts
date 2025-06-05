import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios/usuarios.service';

@Injectable()
export class AccesoService {
  constructor(private usrService: UsuariosService) {}

  registro() {
    this.usrService.create({});
  }
}

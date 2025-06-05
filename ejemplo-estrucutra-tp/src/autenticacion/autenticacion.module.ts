import { Module } from '@nestjs/common';
import { AccesoController } from './acceso/acceso.controller';
import { AccesoService } from './acceso/acceso.service';
import { UsuariosService } from 'src/usuarios/usuarios/usuarios.service';

@Module({
  imports: [UsuariosService],
  controllers: [AccesoController],
  providers: [AccesoService],
})
export class AutenticacionModule {}

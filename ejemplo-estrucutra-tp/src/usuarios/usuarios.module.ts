import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EstadisticasModule } from './estadisticas/estadisticas.module';

@Module({
  imports: [UsuariosModule, EstadisticasModule]
})
export class UsuariosModule {}

import { Module } from '@nestjs/common';
import { PerfilesModule } from './perfiles/perfiles.module';
import { UsuariosController } from './usuarios.controller';

@Module({
  imports: [PerfilesModule],
  controllers: [UsuariosController],
})
export class UsuariosModule {}

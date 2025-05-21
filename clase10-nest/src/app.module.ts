import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AlumnoModule } from './alumno/alumno.module';

@Module({
  imports: [UsuariosModule, AlumnoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
// ruta /

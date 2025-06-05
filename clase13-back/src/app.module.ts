import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EntidadModule } from './entidad/entidad.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsuariosModule, EntidadModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { ComentariosModule } from './comentarios/comentarios.module';

@Module({
  imports: [PublicacionesModule, ComentariosModule]
})
export class PublicacionesModule {}

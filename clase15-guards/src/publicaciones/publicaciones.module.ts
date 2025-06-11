import { Module } from '@nestjs/common';
import { PublicacionesService } from './publicaciones.service';
import { PublicacionesController } from './publicaciones.controller';
import { JwtService } from 'src/services/jwt/jwt.service';

@Module({
  controllers: [PublicacionesController],
  providers: [PublicacionesService, JwtService],
})
export class PublicacionesModule {}

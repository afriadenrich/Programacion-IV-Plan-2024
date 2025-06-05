import { Module } from '@nestjs/common';
import { AccesoController } from './acceso/acceso.controller';

@Module({
  controllers: [AccesoController]
})
export class AuthModule {}

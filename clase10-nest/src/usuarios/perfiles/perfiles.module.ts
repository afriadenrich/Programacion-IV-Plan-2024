import { Module } from '@nestjs/common';
import { PerfilesController } from './perfiles.controller';
import { ImagenesPerfilesController } from './imagenes-perfiles.controller';

@Module({
  controllers: [PerfilesController, ImagenesPerfilesController],
})
export class PerfilesModule {}

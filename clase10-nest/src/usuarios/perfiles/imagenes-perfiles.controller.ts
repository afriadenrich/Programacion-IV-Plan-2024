import { Controller, Get } from '@nestjs/common';

@Controller('imagenes-perfiles')
export class ImagenesPerfilesController {
  @Get()
  perfiles() {
    return 'imagenes-perfiles';
  }
}

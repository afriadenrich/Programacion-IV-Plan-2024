import { Controller, Get } from '@nestjs/common';

@Controller('perfiles')
export class PerfilesController {
  @Get()
  perfiles() {
    return 'Perfiles';
  }
}
// /usuarios/perfiles
// /perfiles

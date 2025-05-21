import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
  @Get()
  perfiles() {
    return 'usuarios';
  }
}

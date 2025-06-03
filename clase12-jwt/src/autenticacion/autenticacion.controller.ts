import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Headers,
  Ip,
} from '@nestjs/common';
import { AutenticacionService } from './autenticacion.service';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly autenticacionService: AutenticacionService) {}

  @Post('/registro')
  registro(@Body() body: any, @Ip() ip: string) {
    return this.autenticacionService.registrar(body, ip);
  }

  @Post('/login')
  login(@Body() body: any, @Ip() ip: string) {
    return this.autenticacionService.loguear(body, ip);
  }

  @Get('/datos')
  datos(@Headers('Authorization') auth: string, @Ip() ip: string) {
    if (auth) {
      const token = auth?.split(' ')[1];
      // const token = auth?.slice(7);
      return this.autenticacionService.traerDatos(token, ip);
    } else {
      return 'No hay header';
    }
  }
}

import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

// ruta /
@Controller('/saludar') // Decorador
export class AppController {
  // Clase

  @Get('/')
  getVacio(@Query('id') id: number) {
    return { id: id };
  }

  @Get('/:usuario') // Decorador con método abajo
  getHello(
    @Req() request: Request,
    @Res() response: Response,
    @Param() parametros: { usuario: string },
  ) {
    const nombre: string = parametros.usuario;
    response.status(HttpStatus.UNAUTHORIZED);
    response.json({ mensaje: 'Hola ' + nombre });
  }

  @Post('/')
  postear(@Res() response: Response) {
    response.status(HttpStatus.UNAUTHORIZED).send();
  }
}

// GET localhost:3000/controller

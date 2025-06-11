import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { JwtService } from './services/jwt/jwt.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private usrService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('registro')
  registrar(@Body() body: any) {
    // Guardar al usuario
    const usuarioCreado = this.usrService.create(body);

    // Crear un token
    const token = this.jwtService.crearToken(usuarioCreado);

    return {
      access_token: token,
    };
  }

  @Post('login')
  login(@Body() body: any) {
    // Leia el usuario
  }
}

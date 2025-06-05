import { Body, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Controller('acceso')
export class AccesoController {
  @Post('registro')
  async registrar(@Body() body: { correo: string; contra: string }) {
    const saltOrRounds = 10;
    // const password = 'random_password';
    const hash = await bcrypt.hash(body.contra, saltOrRounds);

    return { hash: hash };
  }

  @Post('login')
  async loguear(@Body() body: { hash: string; contra: string }) {
    const isMatch = await bcrypt.compare(body.contra, body.hash);

    return { coincide: isMatch };
  }
}

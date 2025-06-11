import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class JwtService {
  crearToken(datosUsuario: any): string {
    const payload = {
      ...datosUsuario,
      iat: Date.now() / 1000,
      exp: Date.now() / 1000 + 60 * 60 * 1.5,
    };

    const token = sign(payload, process.env.JWT_SECRET || 'CLAVEULTRASECRETA', {
      algorithm: 'HS256',
    });

    return token;
  }

  leerToken(token: string): any | null {
    try {
      const payload = verify(
        token,
        process.env.JWT_SECRET || 'CLAVEULTRASECRETA',
      );

      const datosUsuario = payload;

      return datosUsuario;
    } catch (error) {
      return null;
    }
  }
}

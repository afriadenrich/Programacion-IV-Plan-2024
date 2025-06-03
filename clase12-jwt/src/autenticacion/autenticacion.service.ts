import { Injectable } from '@nestjs/common';
import { sign, decode, verify, JsonWebTokenError } from 'jsonwebtoken/index';

@Injectable()
export class AutenticacionService {
  registrar(body: any, ip: string) {
    // Registra etc etc ...

    const { id, nombre } = body;
    return this.crearToken(id, nombre, ip);
  }

  loguear(body: any, ip: string) {
    // Loguea etc. etc....

    const { id, nombre } = body;
    return this.crearToken(id, nombre, ip);
  }

  traerDatos(token: string, ip: string) {
    try {
      const payload = verify(token, ip + 'clave-ultra-secreta');
      return payload;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }

  crearToken(id, nombre, ip) {
    const payload = {
      id: id,
      nombre: nombre,
      iat: Date.now() / 1000,
      exp: Date.now() / 1000 + 60,
    };
    console.log(payload);

    try {
      const token = sign(payload, ip + 'clave-ultra-secreta', {
        algorithm: 'HS256',
      });
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
      return 'error';
    }
  }
}

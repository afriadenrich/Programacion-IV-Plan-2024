import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtService } from 'src/services/jwt/jwt.service';

@Injectable()
export class LogueadoGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const authorization = request.header('Authorization');

    if (!authorization) return false;

    const token = authorization?.split(' ')[1];

    const decoded = this.jwtService.leerToken(token);

    // ¿Cómo podemos añadir a la request los datos del decoded?
    if (decoded) {
      // request.body = {
      //   ...request.body,
      //   usuario: decoded,
      // };

      request.headers.user_id = decoded.user_id;
      request.headers.profile = decoded.profile;
    }

    return decoded !== null;
  }
}

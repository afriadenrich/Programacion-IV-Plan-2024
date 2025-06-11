import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AdminException } from 'src/errors/AdminException';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const profile = request.header('profile');

    if (profile === 'admin') return true;

    throw new AdminException('Desde el admin guard');

    throw new UnauthorizedException();

    throw new HttpException('No es admin', HttpStatus.UNAUTHORIZED, {
      cause: new Error(),
      description: 'Que no sos admin',
    });
  }
}

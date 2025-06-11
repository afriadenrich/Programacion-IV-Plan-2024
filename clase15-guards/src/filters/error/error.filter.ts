import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import e, { Request, Response } from 'express';

@Catch(HttpException)
export class ErrorFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const req: Request = host.switchToHttp().getRequest();
    const response: Response = host.switchToHttp().getResponse();
    const status = exception.getStatus();

    console.log(`${status} - ${req.method} - ${req.url} - ${exception.cause}`);

    response.status(status).json({
      statusCode: status,
      horario: new Date().toISOString(),
      path: req.url,
      message: exception.message,
    });
  }
}

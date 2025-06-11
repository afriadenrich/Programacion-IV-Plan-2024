import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

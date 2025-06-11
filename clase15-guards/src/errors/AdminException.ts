import { HttpException, HttpStatus } from '@nestjs/common';

export class AdminException extends HttpException {
  constructor(causa: string) {
    super('No sos admin', HttpStatus.UNAUTHORIZED, {
      cause: causa,
      description: 'Description',
    });
    console.log(this.cause);
  }
}

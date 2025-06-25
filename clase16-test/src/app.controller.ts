import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getModelToken } from '@nestjs/mongoose';
import { Book } from './book/schemas/book.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // console.log(getModelToken(Book.name));
    return this.appService.getHello();
  }
}

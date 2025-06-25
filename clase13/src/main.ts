import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { existsSync, mkdirSync } from 'node:fs';

async function bootstrap() {
  // if (!existsSync('./public/images')) {
  //   mkdirSync('./public/images');
  // }

  const app = await NestFactory.create(AppModule);

  console.log(process.env.FRONT_URL);
  app.enableCors({
    origin: process.env.FRONT_URL,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

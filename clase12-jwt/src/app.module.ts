import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

@Module({
  imports: [AutenticacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

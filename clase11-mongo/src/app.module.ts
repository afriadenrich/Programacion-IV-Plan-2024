import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [UsuariosModule, ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

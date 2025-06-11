import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PublicacionesModule } from './publicaciones/publicaciones.module';
import { JwtService } from './services/jwt/jwt.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { ErrorFilter } from './filters/error/error.filter';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsuariosModule,
    PublicacionesModule,
    ThrottlerModule.forRoot({
      throttlers: [
        {
          name: 'corto',
          ttl: 10 * 1000,
          limit: 5,
        },
        {
          ttl: 60 * 1000,
          limit: 100,
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtService,
    UsuariosService,
    ErrorFilter,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

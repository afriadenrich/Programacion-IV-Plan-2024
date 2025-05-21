import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';

@Module({
  controllers: [AlumnoController],
  providers: [AlumnoService],
})
export class AlumnoModule {}

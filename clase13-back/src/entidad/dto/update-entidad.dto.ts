import { PartialType } from '@nestjs/mapped-types';
import { CreateEntidadDto } from './create-entidad.dto';

export class UpdateEntidadDto extends PartialType(CreateEntidadDto) {}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  HttpStatus,
  // FileValidator,
  MaxFileSizeValidator,
  Put,
  // FileTypeValidator,
} from '@nestjs/common';
import { EntidadService } from './entidad.service';
import { CreateEntidadDto } from './dto/create-entidad.dto';
import { UpdateEntidadDto } from './dto/update-entidad.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('entidad')
export class EntidadController {
  constructor(private readonly entidadService: EntidadService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('foto', {
      storage: diskStorage({
        filename(req, file, callback) {
          const nuevoNombre = Date.now() + '-' + file.originalname;
          callback(null, nuevoNombre);
        },
        destination(req, file, callback) {
          callback(null, 'public/fotos');
        },
      }),
    }),
  )
  create(
    @UploadedFile(
      new ParseFilePipe({
        fileIsRequired: true,
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          // new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    foto: Express.Multer.File,
    @Body() createEntidadDto: CreateEntidadDto,
  ) {
    return { ...createEntidadDto, foto };
  }

  @Get()
  findAll() {
    const entidades = [{ nombre: 'A' }, { nombre: 'B' }, { nombre: 'C' }];
    return entidades;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entidadService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEntidadDto: UpdateEntidadDto) {
    return this.entidadService.update(+id, updateEntidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entidadService.remove(+id);
  }
}

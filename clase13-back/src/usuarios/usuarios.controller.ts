import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  // UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {
  FileFieldsInterceptor,
  // FileInterceptor,
} from '@nestjs/platform-express';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @UseInterceptors(
    // FileInterceptor('foto', {
    //   dest: 'public/images',
    // }),
    FileFieldsInterceptor([{ name: 'foto' }, { name: 'banner' }]),
  )
  create(
    @Body() createUsuarioDto: CreateUsuarioDto,
    // @UploadedFile() foto: Express.Multer.File,
    @UploadedFiles()
    files: { foto: Express.Multer.File; banner: Express.Multer.File },
  ) {
    console.log(files);
    console.log(createUsuarioDto);

    // subirDB({path: "localhos:3000/public/images/" + files.foto.fieldname});

    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}

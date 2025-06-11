import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
  Catch,
  UseFilters,
} from '@nestjs/common';
import { PublicacionesService } from './publicaciones.service';
import { CreatePublicacioneDto } from './dto/create-publicacione.dto';
import { UpdatePublicacioneDto } from './dto/update-publicacione.dto';
import { LogueadoGuard } from './guards/logueado/logueado.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { ErrorFilter } from 'src/filters/error/error.filter';

@Controller('publicaciones')
@UseFilters(new ErrorFilter())
@UseGuards(AdminGuard)
@UseGuards(LogueadoGuard)
export class PublicacionesController {
  constructor(private readonly publicacionesService: PublicacionesService) {}

  @Post()
  create(@Body() body: any, @Headers('user_id') usrId: string) {
    console.log(usrId);
    return this.publicacionesService.create(body);
  }

  @Get()
  findAll() {
    return this.publicacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicacionesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublicacioneDto: UpdatePublicacioneDto,
  ) {
    return this.publicacionesService.update(+id, updatePublicacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicacionesService.remove(+id);
  }
}

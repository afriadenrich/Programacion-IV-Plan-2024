/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './entities/usuario.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsuariosService {
  
  // Clase.name -> "Clase";
constructor(@InjectModel(Usuario.name) private usuarioModel: Model<Usuario>) {
}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const instancia = new this.usuarioModel({
      nombre: "Yo",
      apellido: "Yo también",
      edad: 83
    });
    const guardado = await instancia.save();

    return guardado;
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario, UsuarioDocument } from './entities/usuario.entity';
import { Model, Types } from 'mongoose';

@Injectable()
export class UsuariosService {
  // Clase.name -> "Clase";
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>,
  ) {}

  async create(usrDto: CreateUsuarioDto) {
    const instancia: UsuarioDocument = new this.usuarioModel({
      nombre: usrDto.nombre,
      apellido: usrDto.apellido,
      edad: usrDto.edad,
      dni: usrDto.dni,
    });
    const guardado = await instancia.save();

    return guardado;
  }

  async findAll() {
    const todos: Usuario[] = await this.usuarioModel.find();
    return todos;
  }

  async findOne(id: string) {
    const uno = await this.usuarioModel.findById(id);
    return uno;
  }

  async update(id: string, updDto: UpdateUsuarioDto) {
    const editado = await this.usuarioModel.updateOne(
      { _id: id },
      { nombre: updDto.nombre, apellido: updDto.apellido, edad: updDto.edad },
    );
    return editado;
  }

  async remove(id: string) {
    const eliminado = await this.usuarioModel.deleteOne({ _id: id });
    return eliminado;
  }
}

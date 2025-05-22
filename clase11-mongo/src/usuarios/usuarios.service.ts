/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './entities/usuario.entity';
import { Model, Types } from 'mongoose';

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

  async findAll() {
    const todos: Usuario[] = await this.usuarioModel.find()
    return todos;
  }

  async findOne(id: number) {
    const uno = await this.usuarioModel.findById(id);
    return uno;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const editado = await this.usuarioModel.updateOne({ nombre: "Yo"}, { apellido: "OTRO"});
    return editado;
  }
  
  async remove(id: number) {
    const eliminado = await this.usuarioModel.deleteOne({apellido: "OTRO"});
    return eliminado;
  }
}

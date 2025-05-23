import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
// import { Types } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

// Schema / Modelo
@Schema()
export class Usuario {
  _id?: ObjectId;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellido: string;

  @Prop({ required: true, type: Number })
  edad: number;

  @Prop({ required: true, type: Number })
  dni: number;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);


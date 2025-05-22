import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Types } from 'mongoose';

// export type CatDocument = HydratedDocument<Cat>;

// Schema / Modelo
@Schema()
export class Usuario {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  apellido: string;

  @Prop({ required: true, type: Number })
  edad: number;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);


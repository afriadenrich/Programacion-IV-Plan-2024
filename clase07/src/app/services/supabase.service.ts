import { Injectable } from '@angular/core';
import { createClient, RealtimeChannel } from '@supabase/supabase-js';
import { Mensaje } from '../classes/mensaje';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase;
  canal: RealtimeChannel;

  constructor() {
    this.supabase = createClient(
      'https://ifbdcuispaelyipwwpij.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYmRjdWlzcGFlbHlpcHd3cGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjYzMzgsImV4cCI6MjA1OTkwMjMzOH0.ddFnhC_Y1cxt_lHKye0lbDAaOpa4eG9kKc3r7FYwD-I'
    );

    this.canal = this.supabase.channel('schema-db-changes');
  }

  async crear(mensaje: string, id_usuario: number) {
    // mensaje
    await this.supabase
      .from('chat')
      .insert({ mensaje: mensaje, id_usuario: id_usuario });
  }

  async traer() {
    const { data } = await this.supabase
      .from('chat')
      .select('id, mensaje, created_at, usuarios (id, nombre)');
    return data as Mensaje[];
  }
}

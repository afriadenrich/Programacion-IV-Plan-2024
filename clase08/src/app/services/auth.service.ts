import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  supabase: SupabaseClient<any, 'public', any>;
  user = signal<User | null>(null); // DEL AUTH
  userDB = signal<UsuarioDB | null>(null) // DE LA DB
  router = inject(Router);

  constructor() {
    this.supabase = createClient(
      'https://ifbdcuispaelyipwwpij.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYmRjdWlzcGFlbHlpcHd3cGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjYzMzgsImV4cCI6MjA1OTkwMjMzOH0.ddFnhC_Y1cxt_lHKye0lbDAaOpa4eG9kKc3r7FYwD-I'
    );
    
    // const mensajes = await this.supabase.from("chat").select("mensaje, created_at, usuarios (nombre)")

    this.supabase.auth.onAuthStateChange((event, session) => {
      if(session?.user) {
        this.supabase.auth.getUser().then((respuestaUsuarioAuth) => {
          this.user.set(respuestaUsuarioAuth.data.user);
          
          this.supabase.from("usuariosUID").select("*").eq("id", this.user()?.id).single().then((respuestaUsuarioDB ) => {

            this.userDB.set(respuestaUsuarioDB.data);
            
            console.log(this.user());
            console.log(this.userDB());
          })
        })
      } else {
        this.user.set(null);
        this.userDB.set(null);
      }
    })
  }

  async crearCuenta(email: string, password: string, nombre: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    if(!error) {
      // data.user es de tipo USER. USER define que id puede ser undefined.
      this.crearUsuarioDB(data.user!.id, email, nombre);
    }
  }

  private async crearUsuarioDB(uid: string, email: string, nombre:string) {
    const { data, error } = await this.supabase.from("usuariosUID").insert({
      id: uid,
      nombre: nombre,
      email: email
    });
  }

  async iniciarSesion(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }

  async cerrarSesion() {
    const { error } = await this.supabase.auth.signOut();
  }
}

class UsuarioDB {
  id?: string;
  nombre? : string;
  email? : string;
}
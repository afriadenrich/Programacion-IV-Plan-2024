import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  supabase: SupabaseClient<any, 'public', any>;
  user = signal<User | null>(null);
  router = inject(Router);

  constructor() {
    this.supabase = createClient(
      'https://ifbdcuispaelyipwwpij.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYmRjdWlzcGFlbHlpcHd3cGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjYzMzgsImV4cCI6MjA1OTkwMjMzOH0.ddFnhC_Y1cxt_lHKye0lbDAaOpa4eG9kKc3r7FYwD-I'
    );

    // Detectar cuando se inicia o cierra la sesión
    this.supabase.auth.onAuthStateChange((event, session) => {
      if (session === null) {
        this.user.set(null);
        this.router.navigateByUrl("/login");
        return;
      }
      
      this.supabase.auth.getUser().then(({ data, error }) => {
        this.user.set(data.user);
        this.router.navigateByUrl("/");
      });
    });
  }

  //(event: AuthChangeEvent, session: Session | null) => void | Promise<void>

  // Crear una cuenta
  async crearCuenta(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password,
    });
  }

  // Iniciar sesion
  async iniciarSesion(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }

  // Cerrar la sesion
  async cerrarSesion() {
    const { error } = await this.supabase.auth.signOut();
  }
}

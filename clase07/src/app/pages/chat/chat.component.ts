import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Mensaje } from '../../classes/mensaje';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  supabase = inject(SupabaseService);
  chat = signal<Mensaje[]>([]);
  constructor(){
    // Traer inicalmente
    this.supabase.traer().then((response) => {
      if(response !== null) {
        this.chat.set([...response]);
      }
    })

    // detectar cambios
    const subscripcion = this.supabase.canal.on("postgres_changes", { event: "INSERT", schema: 'public', table: 'chat',
    }, (payload) => {
      const array: Mensaje[] = this.chat();
      array.push(payload.new as Mensaje);
      this.chat.set([...array]);
    });

    subscripcion.subscribe();
  }
}

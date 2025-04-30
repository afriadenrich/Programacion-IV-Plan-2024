import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { SupabaseService } from './services/supabase.service';

environment
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title? = 'clase07';
  supabase = inject(SupabaseService);

  ngOnInit() {
    this.title = environment.dato;
  }
}

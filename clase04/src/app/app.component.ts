import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabaseService } from './services/database.service';
import { createClient } from '@supabase/supabase-js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  databaseSerice = inject(DatabaseService);

}

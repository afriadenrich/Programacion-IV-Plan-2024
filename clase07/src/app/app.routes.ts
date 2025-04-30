import { Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { TemaComponent } from './pages/tema/tema.component';

export const routes: Routes = [{
    path: "chat", component: ChatComponent
}, {path: "", component: TemaComponent}];

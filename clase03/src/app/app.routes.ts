import { Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [{
    path: "registro", component: RegistroComponent
},{
    path: "login", component: LoginComponent
},{
    path: "miperfil", component: MiPerfilComponent
},

];

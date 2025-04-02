import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ErrorComponent } from './components/error/error.component';
import { BindeosComponent } from './components/bindeos/bindeos.component';

// Definir una ruta
// 1. ¿Cuál es la ruta? -> path
// 2. ¿Cuál es el componente que se muestra en esa ruta? -> component

export const routes: Routes = [
    { path: "login", component: LoginComponent }, 
    { path: "bienvenida", component: BienvenidaComponent }, {
        path: "error", component: ErrorComponent
    },
    {path: "bindeos", component: BindeosComponent},
    {path: "", redirectTo: "bienvenida", pathMatch: "full"},
    // COMODÍN SIEMPRE AL FINAL!!!
    { path: "**", redirectTo: "error", pathMatch: "full" },
];


// Lograr:
// Si entro a localhost:4200/ -> redirigir a bienvenida
// Si entro a una ruta que no existe, mostrar ErrorComponent
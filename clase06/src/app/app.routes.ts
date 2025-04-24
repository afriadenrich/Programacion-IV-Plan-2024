import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { AppComponent } from './app.component';
import { authGuard } from './guards/auth.guard';

// Cómo podemos hacer una navegación anidada / navegación hija
// Cómo podemos hacer que los componentes no carguen todos juntos. Carga diferida / Lazy loading.
// Cómo podemos bloquear rutas dependiendo de ciertas condiciones

const routaPrincipal = {
  path: "",
  component: AppComponent,
  children: "routes"
}

export const routes: Routes = [
  {
    path: 'login',
    // component: LoginComponent,
    loadComponent: () => import("./pages/login/login.component").then((modulo) => modulo.LoginComponent)
  },
  {
    path: 'registro',
    // component: RegistroComponent,
    loadComponent: () => import("./pages/registro/registro.component").then((m) => m.RegistroComponent)
  },
  { 
    path: "", component: HomeComponent, 
    canActivate: [authGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'juegos',
    component: JuegosComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'mayor-menor', //juegos/mayor-menor
        component: MayorMenorComponent,
      },
      {
        path: 'ahorcado', //juegos/ahorcado
        component: AhorcadoComponent,
      },
    ],
  },
];

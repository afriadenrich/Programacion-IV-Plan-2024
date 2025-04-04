import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { InfoComponent } from './pages/info/info.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonasComponent } from './pages/personas/personas.component';

export const routes: Routes = [{
    "path": "personas", component: PersonasComponent,
}, {
    "path": "login", component: LoginComponent,
}, {
    "path": "bienvenida", component: BienvenidaComponent
}, {
    "path": "info", component: InfoComponent
}, {
    "path": "botones", component: ListadoComponent
}];

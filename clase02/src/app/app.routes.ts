import { Routes } from '@angular/router';
import { RegistrosComponent } from './pages/registros/registros.component';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { InfoComponent } from './pages/info/info.component';

export const routes: Routes = [{
    "path": "registros", component: RegistrosComponent,
}, {
    "path": "login", component: LoginComponent,
}, {
    "path": "bienvenida", component: BienvenidaComponent
}, {
    "path": "info", component: InfoComponent
}];

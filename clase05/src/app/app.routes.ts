import { Routes } from '@angular/router';
import { AutosComponent } from './pages/autos/autos.component';
import { AutosDBComponent } from './pages/autos-db/autos-db.component';

export const routes: Routes = [{
    path: "", component: AutosComponent
}, {
    path: "db", component: AutosDBComponent
}];

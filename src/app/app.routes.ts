import { Routes } from '@angular/router';
import { CasaComponent } from './casa/casa.component';
import { VistaComponent } from './vista/vista.component';

export const routes: Routes = [
    { path: 'casa', component: CasaComponent },
    { path: 'vista', component: VistaComponent },

];

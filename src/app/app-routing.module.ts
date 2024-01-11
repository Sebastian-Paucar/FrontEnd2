import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeraVistaComponent } from './primera-vista/primera-vista.component';
import { SegundaVistaComponent } from './segunda-vista/segunda-vista.component';

const routes: Routes = [
  { path: 'primera-vista', component: PrimeraVistaComponent },
  { path: 'segunda-vista', component: SegundaVistaComponent },
  { path: '', redirectTo: '..', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeraVistaComponent } from './primera-vista/primera-vista.component';
import { SegundaVistaComponent } from './segunda-vista/segunda-vista.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeraVistaComponent,
    SegundaVistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Asegúrate de que esta línea esté presente y correcta
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

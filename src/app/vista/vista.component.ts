import { Component } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.css'
})
export class VistaComponent {
  additionalInfo: string = '¡Gracias por visitarnos! Esta es más información sobre nosotros.';
}

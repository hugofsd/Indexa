import { ContainerComponent } from './../../componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent
  ],
  standalone: true,
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

}

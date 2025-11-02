import { ContainerComponent } from './../../componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {


  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Hugo'),
      telefone: new FormControl('99 9999-9999'),
      email: new FormControl('hugo@gmail.com'),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('Olá Mundo')
    })

  }

  cancelar() {
    throw new Error('Function not implemented.');
  }

  salvarContato() {
    console.log(this.contatoForm.value);
  }



}


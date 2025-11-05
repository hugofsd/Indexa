import { ContainerComponent } from './../../componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  standalone: true,
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {


  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Hugo', Validators.required),
      telefone: new FormControl('99 9999-9999'),
      email: new FormControl('hugo@gmail.com', Validators.required),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('Olá Mundo')
    })

  }

  cancelar() {
    throw new Error('Function not implemented.');
  }

  salvarContato() {
      if(this.contatoForm.valid) {
      console.log(this.contatoForm.value);
    } else {
      window.alert('Formulário inválido');
    }
  }



}


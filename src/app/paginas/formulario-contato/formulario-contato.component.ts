import { ContainerComponent } from './../../componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class FormularioContatoComponent implements OnInit {


  contatoForm!: FormGroup;

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
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


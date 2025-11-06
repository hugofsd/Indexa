import { ContainerComponent } from './../../componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  standalone: true,
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit {


  contatoForm!: FormGroup;

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }



  ngOnInit() {
    this.inicializarFormulario();
    this.carreegarContato();
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
  carreegarContato(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    if(id !== 0 && id !== null){
    this.contatoService.buscarContatoPorId(id).subscribe(contato => {
      this.contatoForm.patchValue(contato); // atualizar a estrutura do forumalrio
    });
    }
  }

  salvarContato() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    const novoContato = this.contatoForm.value;

     if(id !== 0 && id !== null){
      novoContato.id = id;
     }

    this.contatoService.editarOuSalvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos')
    });
  }
  cancelar() {
    this.contatoForm.reset();
  }

   voltar (){
    this.router.navigate(['/lista-contatos']);
  }


}


import { ContatoService } from './../../services/contato.service';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CommonModule } from '@angular/common';
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeparadorComponent } from "../../componentes/separador/separador.component";

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent
],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent {

  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: '',
    observacoes: '',
    avatar: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contatoService: ContatoService
  ) { }
  ngOnInit() {
    // acessar os paramentros da rota
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    if(id !== 0 && id !== null){
    this.contatoService.buscarContatoPorId(id).subscribe(contato => {
      this.contato = contato
    });
    }

  }


   excluir(){
    if(this.contato.id){
      this.contatoService.excluirContato(this.contato.id).subscribe(() => {
        this.router.navigate(['/lista-contatos']);
      });
    }
   }

  voltar() {
    this.router.navigate(['/lista-contatos']);
  }

}

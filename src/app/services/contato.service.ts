import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { Contato } from '../componentes/contato/contato';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "email@emal.com"},
  ]


  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const contatosLocalStorageString = localStorage.getItem('contatos');
      const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;
      if (contatosLocalStorage) {
        this.contatos = contatosLocalStorage;
      }
    }
  }


  obterContatos() {
    return this.contatos;
  }

   salvarContato(contato: Contato) {
    if (isPlatformBrowser(this.platformId)) {
      this.contatos.push(contato);
      localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }
  }
}

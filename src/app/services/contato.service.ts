import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {


  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {
  }

  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }

  salvarContato(contato: Contato) {
   return this.http.post<Contato>(this.API, contato)
  }

  buscarContatoPorId(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.API}/${id}`);
  }

  excluirContato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  editarContato(contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.API}/${contato.id}`, contato);
  }

  editarOuSalvarContato(contato: Contato): Observable<Contato> {
    if(contato.id) {
        return this.editarContato(contato)
    } else {
        return this.salvarContato(contato)
    }
  }


}

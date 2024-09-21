import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'app/models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlBase = "http://localhost:8080/hole/usuarios";

  constructor(private clienteHttp: HttpClient) { }

  ObtenerUsuariosLista(): Observable<Usuario[]>{
  return this.clienteHttp.get<Usuario[]>(this.urlBase);
  }

}

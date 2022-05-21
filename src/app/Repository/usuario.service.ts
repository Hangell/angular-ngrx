import { Injectable } from '@angular/core';
import { UsuarioModel } from '../Models/UsuarioModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<UsuarioModel[]>(`${environment.api}/usuarios`);
  }

  getUsusario(id: number) {
    return this.http.get<UsuarioModel>(`${environment.api}/usuarios/${id}`);
  }

  addUsuario(usuario: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<UsuarioModel>(`${environment.api}/usuarios`, JSON.stringify(usuario), { headers: headers });
  }

  updateUsuario(usuario: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<UsuarioModel>(`${environment.api}/usuarios/${usuario.id}`, JSON.stringify(usuario), { headers: headers });
  }

  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(`${environment.api}/usuarios/${id}`, { headers: headers });
  }


}

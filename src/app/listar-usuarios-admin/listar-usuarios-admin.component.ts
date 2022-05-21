import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../Models/UsuarioModel';
import { UsuarioService } from '../Repository/usuario.service';
import { AppState } from '../Store/app.state';
import * as fromUsuarioActions from '../Store/usuarios/usuarios.actions';
import * as fromUsuarioSelector from '../Store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-listar-usuarios-admin',
  templateUrl: './listar-usuarios-admin.component.html',
  styleUrls: ['./listar-usuarios-admin.component.scss']
})
export class ListarUsuariosAdminComponent implements OnInit {
  //usuarios: UsuarioModel[] = [];
  usuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelector.getUsuariosAdministradores);
  //JEito 2
  usuarios: UsuarioModel[] = [];
  //Jeito 3
  usuarios3: UsuarioModel[] = [];
  //Jeito 4
  usuarios4: UsuarioModel[] = [];
  //Jeito 5
  usuarios5: Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelector.getUsuariosParametro,{perfil: 'usuario'})
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //Jeito 2
    this.store
    .select(fromUsuarioSelector.getUsuariosAdministradores)
    .subscribe((usuarios: UsuarioModel[]) => {
      this.usuarios = usuarios;
      });

    //Jeito 3
    this.store
    .select(fromUsuarioSelector.getUsuarios)
    .subscribe((usuarios: UsuarioModel[]) => {
      this.usuarios3 = usuarios.filter((filter)=>filter.perfil === 'administrador');
      });

    //Jeito 4
    this.store
    .select(fromUsuarioSelector.getUsuariosParametro,{perfil: 'Diretor'})
    .subscribe((usuarios: UsuarioModel[]) => {
      this.usuarios4 = usuarios;
      });


  }

}

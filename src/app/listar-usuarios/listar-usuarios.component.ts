import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../Models/UsuarioModel';
import { UsuarioService } from '../Repository/usuario.service';
import { AppState } from '../Store/app.state';
import * as fromUsuarioActions from '../Store/usuarios/usuarios.actions';
import * as fromUsuarioSelector from '../Store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  //usuarios: UsuarioModel[] = [];
  usuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuarioSelector.getUsuarios);
  usuario$: Observable<UsuarioModel | null> = this.store.select(fromUsuarioSelector.getUsuario);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromUsuarioActions.loadUsuarios());
  }

  editar(id: number) {
    this.store.dispatch(fromUsuarioActions.loadUsuario({ payload: id }));
  }

  excluir(id: number) {
    this.store.dispatch(fromUsuarioActions.deleteUsuario({ payload: id }));
  }

}

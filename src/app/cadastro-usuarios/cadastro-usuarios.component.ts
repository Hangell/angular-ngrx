import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioModel } from '../Models/UsuarioModel';
import { UsuarioService } from '../Repository/usuario.service';
import { AppState } from '../Store/app.state';
import * as fromUsuarioActions from '../Store/usuarios/usuarios.actions';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addUsuario() {

    if (this.model.id === 0) {
      console.log('cadastro', this.model)
      this.store.dispatch(fromUsuarioActions.createUsuario({ payload: this.model }));
    }
    else {
      console.log('atualizar', this.model)
      this.store.dispatch(fromUsuarioActions.updateUsuario({ payload: this.model }));
    }
  }


}

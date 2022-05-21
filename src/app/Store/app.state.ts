import { ActionReducerMap } from "@ngrx/store";
import { UsuariosEffects } from "./usuarios/usuarios.effects";
import { usuarioReducer, UsuarioState } from "./usuarios/usuarios.reducer";


export interface AppState{
  usuarios: UsuarioState;
}

export const appReducer: ActionReducerMap<AppState> = {
  usuarios: usuarioReducer
}

export const appEffects = [
  UsuariosEffects,
];

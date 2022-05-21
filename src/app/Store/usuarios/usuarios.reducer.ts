import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/UsuarioModel";
import * as fromUsuariosActions from "./usuarios.actions";

export interface UsuarioState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null;
  error: string | '';
}

export const initialState: UsuarioState = {
  usuarios: [],
  usuario: null,
  error: ''
};

const _usuariosReducer = createReducer(
  initialState,
  on(fromUsuariosActions.loadUsuariosSuccess,(state, { payload }) => ({...state, usuarios: payload, error: ''})),
  on(fromUsuariosActions.loadUsuariosFail,(state, { error }) => ({...state, error: error})),

  on(fromUsuariosActions.loadUsuarioSuccess,(state, { payload }) => ({...state, usuario: payload, error: ''})),
  on(fromUsuariosActions.loadUsuarioFail,(state, { error }) => ({...state, error: error})),

  on(fromUsuariosActions.createUsuarioSuccess,(state, { payload }) => ({...state, usuarios: [...state.usuarios,payload], error: ''})),
  on(fromUsuariosActions.createUsuarioFail,(state, { error }) => ({...state, error: error})),

  on(fromUsuariosActions.updateUsuarioSuccess,(state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => row.id === payload.id ? payload : row),
    error: ''})),
  on(fromUsuariosActions.updateUsuarioFail,(state, { error }) => ({...state, error: error})),

  on(fromUsuariosActions.deleteUsuarioSuccess,(state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((filter) => filter.id !== payload),
    error: ''})),
  on(fromUsuariosActions.deleteUsuarioFail,(state, { error }) => ({...state, error: error})),
);

export function usuarioReducer(state = initialState, action: Action) {
  return _usuariosReducer(state, action);
}

const getUsuariosFeatureState = createFeatureSelector<UsuarioState>(
  "usuarios"
);

export const getUsuarios = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuarios
)

export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuario
)

export const getUsuarioErro = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.error
)

export const getUsuariosAdministradores = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuarios.filter((filter) => filter.perfil === 'administrador')
)


export const getUsuariosParametro = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState, props:{perfil: string}) => state.usuarios.filter((filter) => filter.perfil === props.perfil)
)

export const getUsuariosIdadeVelhos = createSelector(
  getUsuariosFeatureState,
  (state: UsuarioState) => state.usuarios.filter((filter) => filter.idade >= 50)
)

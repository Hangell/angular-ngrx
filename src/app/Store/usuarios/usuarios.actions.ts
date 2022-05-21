import { createAction, props } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/UsuarioModel";

export const enum UsuariosActionsTypes {
  LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD_USUARIOS',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD_USUARIOS_SUCCESS',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD_USUARIOS_FAIL',

  LOAD_USUARIO = '[LOAD_USUARIO] LOAD_USUARIOS',
  LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD_USUARIO_SUCCESS',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD_USUARIO_FAIL',

  CREATE_USUARIO = '[CREATE_USUARIO] CREATE_USUARIOS',
  CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE_USUARIOS_SUCCESS',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE_USUARIOS_FAIL',

  UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE_USUARIOS',
  UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE_USUARIOS_SUCCESS',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE_USUARIOS_FAIL',

  DELETE_USUARIO = '[DELETE_USUARIO] DELETE_USUARIOS',
  DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE_USUARIOS_SUCCESS',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE_USUARIOS_FAIL',
}

export const loadUsuarios = createAction(
  UsuariosActionsTypes.LOAD_USUARIOS
);

export const loadUsuariosSuccess = createAction(
  UsuariosActionsTypes.LOAD_USUARIOS_SUCCESS,
  props<{ payload: UsuarioModel[] }>()
);

export const loadUsuariosFail = createAction(
  UsuariosActionsTypes.LOAD_USUARIOS_FAIL,
  props<{ error: string }>()
);

//CARREGA 1 USUARIO
export const loadUsuario = createAction(
  UsuariosActionsTypes.LOAD_USUARIO,
  props<{ payload: number }>()
);

export const loadUsuarioSuccess = createAction(
  UsuariosActionsTypes.LOAD_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const loadUsuarioFail = createAction(
  UsuariosActionsTypes.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
);

//CREATE USUARIO
export const createUsuario = createAction(
  UsuariosActionsTypes.CREATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const createUsuarioSuccess = createAction(
  UsuariosActionsTypes.CREATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const createUsuarioFail = createAction(
  UsuariosActionsTypes.CREATE_USUARIO_FAIL,
  props<{ error: string }>()
);


//UPDATE USUARIO
export const updateUsuario = createAction(
  UsuariosActionsTypes.UPDATE_USUARIO,
  props<{ payload: UsuarioModel }>()
);

export const updateUsuarioSuccess = createAction(
  UsuariosActionsTypes.UPDATE_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const updateUsuarioFail = createAction(
  UsuariosActionsTypes.UPDATE_USUARIO_FAIL,
  props<{ error: string }>()
);


//DELETE USUARIO
export const deleteUsuario = createAction(
  UsuariosActionsTypes.DELETE_USUARIO,
  props<{ payload: number }>()
);

export const deleteUsuarioSuccess = createAction(
  UsuariosActionsTypes.DELETE_USUARIO_SUCCESS,
  props<{ payload: number }>()
);

export const deleteUsuarioFail = createAction(
  UsuariosActionsTypes.DELETE_USUARIO_FAIL,
  props<{ error: string }>()
);

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { UsuarioService } from "src/app/Repository/usuario.service";
import * as fromUsuariosActions from "./usuarios.actions";

@Injectable()
export class UsuariosEffects {

  constructor(private actions$: Actions, private usuariosService: UsuarioService) {

  }

  loadUsuarios$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosActions.UsuariosActionsTypes.LOAD_USUARIOS),
        exhaustMap(() => this.usuariosService.getUsuarios()
          .pipe(
            map(payload =>
              fromUsuariosActions.loadUsuariosSuccess({ payload }),
              catchError(error => of(fromUsuariosActions.loadUsuariosFail({ error })))
            )
          )
        )
      )

  )

  loadUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosActions.UsuariosActionsTypes.LOAD_USUARIO),
        exhaustMap((record: any) => this.usuariosService.getUsusario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosActions.loadUsuarioSuccess({ payload }),
              catchError(error => of(fromUsuariosActions.loadUsuarioFail({ error })))
            )
          )
        )
      )

  )

  createUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosActions.UsuariosActionsTypes.CREATE_USUARIO),
        exhaustMap((record: any) => this.usuariosService.addUsuario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosActions.createUsuarioSuccess({ payload }),
              catchError(error => of(fromUsuariosActions.createUsuarioFail({ error })))
            )
          )
        )
      )

  )

  updateUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosActions.UsuariosActionsTypes.UPDATE_USUARIO),
        exhaustMap((record: any) => this.usuariosService.updateUsuario(record.payload)
          .pipe(
            map(payload =>
              fromUsuariosActions.updateUsuarioSuccess({ payload }),
              catchError(error => of(fromUsuariosActions.updateUsuarioFail({ error })))
            )
          )
        )
      )

  )

  deleteUsuario$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromUsuariosActions.UsuariosActionsTypes.DELETE_USUARIO),
        exhaustMap((record: any) => this.usuariosService.deleteUsuario(record.payload)
          .pipe(
            map(() =>
              fromUsuariosActions.deleteUsuarioSuccess({ payload: record.payload }),
              catchError(error => of(fromUsuariosActions.deleteUsuarioFail({ error })))
            )
          )
        )
      )

  )



}


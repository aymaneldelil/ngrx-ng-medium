import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { StorageService } from 'src/app/core/service/storage.service';
import { ICurrentUser } from '../../interface/i-current-user';
import { AuthService } from '../../services/auth.service';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  registerAction,
  registerFaliureAction,
  registerSuccessAction,
} from '../action/aut-action';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ req }) =>
        this._authSVC.userRegister(req).pipe(
          tap(() => {
            console.log('IAM IN EFFECT');
          }),
          map((currentUser: ICurrentUser) => {
            this._storageSVC.setData('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          // call action Failure
          catchError((err: HttpErrorResponse) => {
            /* use OF , bec we need to return Obs, and we dont use any thing in pipe*/
            return of(registerFaliureAction({ errors: err.error }));
          })
        )
      )
    );
  });
  //-------------------------------------------------------
  redirectAfterSubmit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this._router.navigateByUrl('/');
        })
      );
    },
    { dispatch: false }
  );
  //-------------------------------------------------------
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ req }) =>
        this._authSVC.userLogin(req).pipe(
          tap(() => {
            console.log('IAM IN LOGIN EFFECT');
          }),
          map((currentUser: ICurrentUser) => {
            return loginSuccessAction({ currentUser });
          }),
          catchError((err: HttpErrorResponse) => {
            console.log("in catch error , may be the re is the error");
            return of(loginFailureAction({ errors: err.error }));
          })
        )
      )
    );
  });
  constructor(
    private actions$: Actions,
    private _authSVC: AuthService,
    private _storageSVC: StorageService,
    private _router: Router
  ) {}
}

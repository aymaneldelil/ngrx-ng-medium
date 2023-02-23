import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { ICurrentUser } from '../../interface/i-current-user';
import { AuthService } from '../../services/auth.service';
import {
  registerAction,
  registerFaliureAction,
  registerSuccessAction,
} from '../action/aut-action';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      /* */
      ofType(registerAction),
      switchMap(({ req }) =>
        this._authSVC.userRegister(req).pipe(
          tap(() => {
            console.log('IAM IN EFFECT');
          }),
          map((currentUser: ICurrentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          // call action Failure
          catchError((err:HttpErrorResponse) => {
            /* use OF , bec we need to return Obs, and we dont use any thing in pipe*/
            return of(registerFaliureAction({errors:err.error}));
          })
        )
      )
    );
  });
  constructor(private actions$: Actions, private _authSVC: AuthService) {}
}

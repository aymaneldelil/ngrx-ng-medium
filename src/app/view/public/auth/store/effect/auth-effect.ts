import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
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
      ofType(registerAction),
      switchMap(({ req }) =>
        this._authSVC.userRegister(req).pipe(
          map((currentUser: ICurrentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(registerFaliureAction);
          })
        )
      )
    );
  });
  constructor(private actions$: Actions, private _authSVC: AuthService) {}
}

import { createAction, props } from '@ngrx/store';
import { ICurrentUser } from 'src/app/view/public/auth/interface/i-current-user';
import { ILoginReq } from 'src/app/view/public/auth/interface/i-login-req';
import { IRegisterReq } from 'src/app/view/public/auth/interface/i-register-req';
import { Ibackenderror } from 'src/app/view/public/auth/interface/ibackenderror';

enum ActionTypes {
  REGISTER = '[Auth] Regester',
  REGISTER_SUCCESS = '[Auth] Regester success',
  REGISTER_FAILURE = '[Auth] Regester faliure',
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Login] Login success',
  LOGIN_FAILURE = '[Login] Login failure',
}

/**
 * امته بستخدم ال
 * Props
 * مع ال
 * Action
 * -------------------------------
 * لو انا مستني داتا راجعة
 * =================================================================
 */
//---------------------------------------------------------------------------------------------------------------------------------------------
export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ req: IRegisterReq }>()
);
//---------------------------------------------------------------------------------------------------------------------------------------------
export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);
//---------------------------------------------------------------------------------------------------------------------------------------------
export const registerFaliureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: Ibackenderror }>()
);
//---------------------------------------------------------------------------------------------------------------------------------------------
export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ req: ILoginReq }>()
);
//---------------------------------------------------------------------------------------------------------------------------------------------
export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);
//---------------------------------------------------------------------------------------------------------------------------------------------
export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: Ibackenderror }>()
);

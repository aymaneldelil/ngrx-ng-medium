import { createAction, props } from '@ngrx/store';
import { ICurrentUser } from '../../interface/i-current-user';
import { IRegisterReq } from '../../interface/i-register-req';

enum ActionTypes {
  REGISTER = '[Auth] Regester',
  REGISTER_SUCCESS = '[Auth] Regester success',
  REGISTER_FAILURE = '[Auth] Regester faliure',
  LOGIN = '[Auth] Login',
}
//---------------------------------------------------------------------------------------------------------------------------------------------
export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{req:IRegisterReq}>()
);

//---------------------------------------------------------------------------------------------------------------------------------------------
export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currUser:ICurrentUser}>()
);
//---------------------------------------------------------------------------------------------------------------------------------------------
export const registerFaliureAction = createAction(
  ActionTypes.REGISTER_FAILURE);

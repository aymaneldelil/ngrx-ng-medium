import { createAction, props } from '@ngrx/store';
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

import { Action, createReducer, on } from '@ngrx/store';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  registerAction,
  registerFaliureAction,
  registerSuccessAction,
} from './aut-action';
import { authState, iAuthState } from './auth-state';

//---------------------------------------------------------------------------------------------------------------------------------------------
/*
لية  ضفت  ال
Action  with state 
علشان عاوز امسك ال props
 الي راجعة
*/
//---------------------------------------------------------------------------------------------------------------------------------------------
const authReducer = createReducer(
  authState,
  on(registerAction, (state): iAuthState => {
    return {
      ...state,
      isSubmitting: true,
      validationErrors: null,
    };
  }),
  on(registerSuccessAction, (state, action): iAuthState => {
    return {
      ...state,
      isLoggedIn: true,
      isSubmitting: false,
      currentUser: action.currentUser,
    };
  }),
  on(registerFaliureAction, (state, action): iAuthState => {
    return {
      ...state,
      isLoggedIn: false,
      isSubmitting: false,
      validationErrors: action.errors,
    };
  }),
  on(loginAction, (state): iAuthState => {
    return {
      ...state,
      isLoggedIn: true,
    };
  }),
  on(loginSuccessAction, (state, action): iAuthState => {
    return {
      ...state,
      isLoggedIn: true,
      currentUser: action.currentUser,
    };
  }),
  on(loginFailureAction, (state, action) => {
    return {
      ...state,
      isLoggedIn: false,
      validationErrors: action.errors,
    };
  })
);
//---------------------------------------------------------------------------------------------------------------------------------------------
export function auth_Reducer(state: iAuthState, action: Action) {
  return authReducer(state, action);
}

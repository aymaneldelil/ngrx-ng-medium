import { Action, createReducer, on } from '@ngrx/store';
import { registerAction } from '../action/aut-action';
import { iAuthState, initialState } from '../state/auth-state';

//---------------------------------------------------------------------------------------------------------------------------------------------
const authReducer = createReducer(
  initialState,
  on(registerAction, (state):iAuthState => {
    return {
      ...state,
      isSubmitting: true,
    };
  })
);

//--------------------------------------------------------------------------------------------------------------------------------------------- 
export function reducers(state:iAuthState , action:Action){
    return  authReducer(state,action)
}
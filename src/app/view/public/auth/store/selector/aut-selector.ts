import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iAuthState } from '../state/auth-state';

//-----------------------------------------------------------------------------------------------------------------------------------------
export const authFeatureSelector = createFeatureSelector<iAuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: iAuthState) => authState.isSubmitting
);
//-----------------------------------------------------------------------------------------------------------------------------------------
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: iAuthState) => authState.validationErrors
);
//-----------------------------------------------------------------------------------------------------------------------------------------
export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: iAuthState) => authState.isLoggedIn
);
//-----------------------------------------------------------------------------------------------------------------------------------------
export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: iAuthState) => authState.isLoggedIn == false
);
//-----------------------------------------------------------------------------------------------------------------------------------------
export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: iAuthState) => authState.currentUser
);

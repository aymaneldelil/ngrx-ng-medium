import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iAuthState } from '../state/auth-state';

//-----------------------------------------------------------------------------------------------------------------------------------------
export const authFeatureSelector = createFeatureSelector<iAuthState>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: iAuthState) => authState.isSubmitting
);

import { ICurrentUser } from 'src/app/view/public/auth/interface/i-current-user';
import { Ibackenderror } from '../../interface/ibackenderror';

export interface iAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: Ibackenderror | null;
}
//---------------------------------------------------------------------------------------------------------------------------------------------
export const initialState: iAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
};



import { ActionReducerMap } from "@ngrx/store";
import { auth_Reducer } from "./auth/auth-reducer";
import { authState } from "./auth/auth-state";
// import { userReducer, UserState } from "./user.reducer";
// import { cartReducer, CartState } from "./cart.reducer";

// interface AppState {
//   userState: UserState;
//   cartState: CartState;
// }

// export const reducers: ActionReducerMap<AppState> = {
//   userState: userReducer,
//   cartState: cartReducer
// };

// interface CoreState {
//     authState: authState;
// }
export const reducers:ActionReducerMap<any> ={
    'auth':auth_Reducer
}
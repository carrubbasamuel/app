// cart.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { addCart } from './cart.action';

export interface CartState {
  cart: any[]; 
}

export const initialState: CartState = {
  cart: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addCart, (state, action) => {
    if (!action.item) {
      return state;
    }

    return {
      ...state,
      cart: [...state.cart, action.item],
    };
  }),
);

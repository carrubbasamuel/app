import { createReducer, on } from '@ngrx/store';
import { addCart, removeProduct, trashAll, addPlusProduct } from './cart.action';

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

    const existingProductIndex = state.cart.findIndex(product => product.product.id === action.item.product.id);
  
    if (existingProductIndex !== -1) {
      const updatedCart = state.cart.map((product, index) => {
        if (index === existingProductIndex) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { ...action.item, quantity: 1 }],
      };
    }
  }),
  on(removeProduct, (state, action) => {
    if (!action.id) {
      return state;
    }

    const isOnlyOne = state.cart.find((product) => product.product.id === action.id)?.quantity === 1;

    if (isOnlyOne) {
      return {
        ...state,
        cart: state.cart.filter((product) => product.product.id !== action.id),
      };
    } else {
      const updatedCart = state.cart.map((product) => {
        if (product.product.id === action.id) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }
  }),

  on(trashAll, (state) => {
    return {
      ...state,
      cart: [],
    }
  }),

  on(addPlusProduct, (state, action) => {
    if (!action.id) {
      return state;
    }
    return {
      ...state,
      cart: state.cart.map((product) => {
        if (product.product.id === action.id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      })
    }
  }
));

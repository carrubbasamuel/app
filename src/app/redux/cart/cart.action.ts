import { createAction, props } from '@ngrx/store';

export const addCart = createAction(
    '[Cart] Add to Cart',
    props<{ item: any }>() 
  );
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
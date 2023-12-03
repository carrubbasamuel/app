import { createAction, props } from '@ngrx/store';

export const addCart = createAction(
    '[Cart] Add to Cart',
    props<{ item: any }>() 
  );
export const removeProduct = createAction(
  '[Cart] Remove Product',
  props<{ id: number }>()
);
export const trashAll = createAction('[Cart] Trash All')

export const addPlusProduct = createAction(
  '[Cart] Add Plus Product',
  props<{ id: number }>()
);

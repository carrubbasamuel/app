
import { createAction, props } from "@ngrx/store";

export const fetchData = createAction("[Data] Fetch Data");

export const fetchDataSuccess = createAction(
  "[Data] Fetch Data Success",
  props<{ data: any }>()
);

export const fetchDataFailure = createAction(
  "[Data] Fetch Data Failure",
  props<{ error: any }>()
);

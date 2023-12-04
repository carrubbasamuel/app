// data.reducer.ts
import { createReducer, on } from "@ngrx/store";
import * as DataActions from "./data.action";

export interface DataState {
  data: any[];
}

export const initialState: DataState = {
  data: [],
};

export const dataReducer = createReducer(
  initialState,
  on(DataActions.fetchDataSuccess, (state, { data }) => {
    console.log("data");
    return {
      ...state,
      data,
    };
  })
);

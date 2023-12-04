// data.effects.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import * as DataActions from "./data.action";

@Injectable()
export class DataEffects {
  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.fetchData),
      mergeMap(() =>
        this.http.get("https://dummyjson.com/products").pipe(
          tap((data) => console.log("Data from API:", data)),
          map((data) => DataActions.fetchDataSuccess({ data })),
          catchError((error) => {
            console.error("Error fetching data:", error);
            return EMPTY;
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}

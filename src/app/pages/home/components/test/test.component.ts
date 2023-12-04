import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { addCart } from "../../../../redux/cart/cart.action";
import * as DataActions from "../../../../redux/data/data.action";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  apiData: any;  
  data$: Observable<any>;

  constructor(
    private store: Store<{ data: any }>
  ) {
    this.data$ = store.select('data');
  }

  ngOnInit() {
    this.store.dispatch(DataActions.fetchData());
    this.data$.subscribe((data) => {
      this.apiData = data.data.products;
    });
  }

  

  addToCart(product: any) {
    this.store.dispatch(addCart({ item: product }));
  }

}

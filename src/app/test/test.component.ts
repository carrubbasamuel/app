import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { addCart } from "../redux/cart/cart.action";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  apiData: any;  
  cart$: Observable<any>;

  constructor(
    private http: HttpClient,
    private store: Store<{ cart: any }>
  ) {
    this.cart$ = store.select('cart');
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const apiUrl = 'https://dummyjson.com/products';
    this.http.get(apiUrl).subscribe((data) => {
      this.apiData = data;
      this.apiData = this.apiData.products;  
    });
  }

  addToCart(product: any) {
    this.store.dispatch(addCart({ item: product }));
  }

}

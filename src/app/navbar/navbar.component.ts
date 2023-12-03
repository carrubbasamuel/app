import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { OffcanvasService } from '../offcanvas/offcanvas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faCart = faCartShopping;
  cart$: Observable<any>;
  numberCart: number =0;

  constructor(
    private store: Store<{ cart: any }>,
    private offcanvasService: OffcanvasService
  ) {
    this.cart$ = store.select('cart')
    this.cart$.subscribe((data) => {
      this.numberCart = data.cart.length;
    });
  }

  openOffcanvas() {
    this.offcanvasService.open();
  }

}

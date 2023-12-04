import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addPlusProduct, removeProduct, trashAll } from '../redux/cart/cart.action';
import { OffcanvasService } from './offcanvas.service';

@Component({
  selector: 'c-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css'],
})
export class NgbdOffcanvasBasic implements AfterViewInit {
  @ViewChild('content') contentTemplate!: TemplateRef<any>;
  closeResult = '';
  cart$: Observable<any>;
  products: any;

  constructor(
    private offcanvasService: OffcanvasService,
    private store: Store<{ cart: any }>
  ) {
    this.cart$ = store.select('cart');
    this.cart$.subscribe((data) => {
      this.products = data.cart;
      this.products = this.products.map((item: any) => {
        return {
          ...item,
          total: item.product.price * item.quantity,
        };
      });
    });
    
  }

  getTotalCart(){
    let total = 0;
    this.products.forEach((item: any) => {
      total += item.total;
    });
    return total;
  }

  removeProductToCart(id: any) {
    this.store.dispatch(removeProduct({ id }));
  }

  addProductToCart(id: any) {
    this.store.dispatch(addPlusProduct({ id}));
  }


  ngAfterViewInit(): void {
    const offcanvasInstance = this.offcanvasService.getOffcanvasInstance();

    if (offcanvasInstance) {
      offcanvasInstance.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    }
    this.offcanvasService.setTemplate(this.contentTemplate);
  }

  trashCart() {
    this.store.dispatch(trashAll());
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case OffcanvasDismissReasons.ESC:
        return 'by pressing ESC';
      case OffcanvasDismissReasons.BACKDROP_CLICK:
        return 'by clicking on the backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}

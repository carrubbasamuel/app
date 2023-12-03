// app.module.ts
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from "./app.component";
import { NavbarModule } from "./navbar/navbar.module";
import { StoreModule } from '@ngrx/store';
import { cartReducer } from "./redux/cart/cart.reducer";
import { TestModule } from "./test/test.module";
import { OffcanvasModule } from "./offcanvas/offcanvas.module";
import { OffcanvasService } from "./offcanvas/offcanvas.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    TestModule,
    NgbModule,
    NavbarModule,
    StoreModule.forRoot({ cart: cartReducer }),
    OffcanvasModule,
  ],
  providers: [
    OffcanvasService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}

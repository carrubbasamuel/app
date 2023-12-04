// app.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from '@ngrx/store';
import { AppComponent } from "./app.component";
import { NavbarModule } from "./navbar/navbar.module";
import { cartReducer } from "./redux/cart/cart.reducer";
import { DataEffects } from "./redux/data/data.efffect";
import { dataReducer } from "./redux/data/data.reducer";
import {AppRoutingModule} from './app-routing.module';
import { OffcanvasModule } from './offcanvas/offcanvas.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NgbModule,
    NavbarModule,
    StoreModule.forRoot({ 
      cart: cartReducer,
      data: dataReducer,
    
    }),
    EffectsModule.forRoot([
      DataEffects,
    ]),
    HttpClientModule,
    AppRoutingModule,
    OffcanvasModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}

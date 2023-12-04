import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        FontAwesomeModule,
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        NavbarComponent,
    ],

})
export class NavbarModule { }
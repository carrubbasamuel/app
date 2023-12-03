import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        FontAwesomeModule,
        CommonModule,
    ],
    exports: [
        NavbarComponent,
    ],

})
export class NavbarModule { }
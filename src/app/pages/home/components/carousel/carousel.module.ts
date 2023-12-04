import { NgModule } from "@angular/core";
import {NgbdCarouselBasic} from "./carousel.component";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        NgbdCarouselBasic,

    ],
    imports: [
        NgbCarouselModule,
    ],
    exports: [
        NgbdCarouselBasic,
    ],
})
export class CarouselModule { }
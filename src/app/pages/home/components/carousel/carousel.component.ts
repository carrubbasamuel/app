import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-carousel-basic',
	templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class NgbdCarouselBasic {
	images = [900, 101, 94].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
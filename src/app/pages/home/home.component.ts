import { Component } from '@angular/core';
import { OffcanvasModule } from "../../offcanvas/offcanvas.module";
import { CarouselModule } from "./components/carousel/carousel.module";
import { TestModule } from './components/test/test.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    OffcanvasModule,
    TestModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}

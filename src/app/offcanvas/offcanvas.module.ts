import { NgModule } from '@angular/core';
import { NgbdOffcanvasBasic } from './offcanvas.component';
import { CommonModule } from '@angular/common';
import { OffcanvasService } from './offcanvas.service';


@NgModule({
  declarations: [
    NgbdOffcanvasBasic,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgbdOffcanvasBasic,
  ]
})
export class OffcanvasModule {}
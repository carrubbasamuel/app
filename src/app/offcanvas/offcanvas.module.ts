import { NgModule } from '@angular/core';
import { NgbdOffcanvasBasic } from './offcanvas.component';
import { CommonModule } from '@angular/common';


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
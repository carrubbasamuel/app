// ngbd-offcanvas-basic.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OffcanvasService } from './offcanvas.service';

@Component({
  selector: 'ngbd-offcanvas-basic',
  templateUrl: './offcanvas.component.html',
})
export class NgbdOffcanvasBasic implements AfterViewInit {
  closeResult = '';

  constructor(private offcanvasService: OffcanvasService) {}

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

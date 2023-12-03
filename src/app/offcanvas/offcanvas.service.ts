import { Injectable } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class OffcanvasService {

  constructor(
    private offcanvasInstance: NgbOffcanvas | null = null,
  ){}

  open(content?: any, options?: NgbOffcanvasOptions): void {
    if (!this.offcanvasInstance) {
      this.offcanvasInstance = new NgbOffcanvas();
    }

    if (this.offcanvasInstance) {
      this.offcanvasInstance.open(content, options);
    }
  }

  getOffcanvasInstance(): Promise<NgbOffcanvas | null> {
    return Promise.resolve(this.offcanvasInstance);
  }
}
import { Injectable, TemplateRef } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
    providedIn: 'root',
})
export class OffcanvasService {
    template$: TemplateRef<any> | null = null;

    constructor(
        private offcanvasInstance: NgbOffcanvas | null = null,
    ) { }


    open(content: TemplateRef<any>, options?: NgbOffcanvasOptions): void {
        if (!this.offcanvasInstance) {
            this.offcanvasInstance = new NgbOffcanvas();
        }

        if (this.offcanvasInstance) {
            this.offcanvasInstance.open(content, options);
        }
    }

    setTemplate(template: TemplateRef<any>): void {
        this.template$ = template;
    }

    getTemplate(): TemplateRef<any> | null {
        return this.template$;
    }

    getOffcanvasInstance(): Promise<NgbOffcanvas | null> {
        return Promise.resolve(this.offcanvasInstance);
    }
}

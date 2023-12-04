
import { NgModule } from "@angular/core";
import { TestComponent } from "./test.component";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from "@angular/common";




@NgModule({
    declarations: [
        TestComponent,
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        CommonModule,
    ],
    exports: [
        TestComponent,
    ],
})
export class TestModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionBarComponent } from './function-bar.component';
import { DurationModule } from './duration/duration.module';



@NgModule({
  declarations: [
    FunctionBarComponent
  ],
  imports: [
    CommonModule,
    DurationModule
  ],
  exports: [
    FunctionBarComponent
  ]
})
export class FunctionBarModule { }

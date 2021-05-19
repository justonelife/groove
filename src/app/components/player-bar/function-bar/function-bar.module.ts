import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionBarComponent } from './function-bar.component';
import { DurationModule } from './duration/duration.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    FunctionBarComponent
  ],
  imports: [
    CommonModule,
    DurationModule,
    SharedModule
  ],
  exports: [
    FunctionBarComponent
  ]
})
export class FunctionBarModule { }

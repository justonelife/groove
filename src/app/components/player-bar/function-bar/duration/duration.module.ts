import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationComponent } from './duration.component';
import { SharedModule } from 'src/app/components/shared/shared.module';



@NgModule({
  declarations: [
    DurationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DurationComponent
  ]
})
export class DurationModule { }

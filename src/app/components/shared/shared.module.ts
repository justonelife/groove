import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SideViewComponent } from './side-view/side-view.component';



@NgModule({
  declarations: [
    SliderComponent,
    SideViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent,
    SideViewComponent
  ]
})
export class SharedModule { }

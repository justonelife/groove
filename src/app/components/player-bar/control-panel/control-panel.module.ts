import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { VolumeSliderComponent } from './volume-slider/volume-slider.component';

@NgModule({
  declarations: [
    ControlPanelComponent,
    VolumeSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlPanelComponent
  ]
})
export class ControlPanelModule { }

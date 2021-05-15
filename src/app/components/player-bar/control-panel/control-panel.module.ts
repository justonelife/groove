import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { VolumeSliderComponent } from './volume-slider/volume-slider.component';
import { MainControlComponent } from './main-control/main-control.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ControlPanelComponent,
    VolumeSliderComponent,
    MainControlComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ControlPanelComponent
  ]
})
export class ControlPanelModule { }

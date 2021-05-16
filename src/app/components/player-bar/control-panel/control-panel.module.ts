import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { MainControlComponent } from './main-control/main-control.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VolumeSliderModule } from './volume-slider/volume-slider.module';

@NgModule({
  declarations: [
    ControlPanelComponent,
    MainControlComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    VolumeSliderModule
  ],
  exports: [
    ControlPanelComponent
  ]
})
export class ControlPanelModule { }

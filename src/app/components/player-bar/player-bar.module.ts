import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerBarComponent } from './player-bar.component';
import { ControlPanelModule } from './control-panel/control-panel.module';

@NgModule({
  declarations: [
    PlayerBarComponent
  ],
  imports: [
    CommonModule,
    ControlPanelModule
  ],
  exports: [
    PlayerBarComponent
  ]
})
export class PlayerBarModule { }

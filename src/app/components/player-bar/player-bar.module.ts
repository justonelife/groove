import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerBarComponent } from './player-bar.component';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { FunctionBarModule } from './function-bar/function-bar.module';

@NgModule({
  declarations: [
    PlayerBarComponent
  ],
  imports: [
    CommonModule,
    ControlPanelModule,
    FunctionBarModule
  ],
  exports: [
    PlayerBarComponent
  ]
})
export class PlayerBarModule { }

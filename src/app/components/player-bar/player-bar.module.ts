import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerBarComponent } from './player-bar.component';
import { ControlPanelModule } from './control-panel/control-panel.module';
import { FunctionBarComponent } from './function-bar/function-bar.component';

@NgModule({
  declarations: [
    PlayerBarComponent,
    FunctionBarComponent
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

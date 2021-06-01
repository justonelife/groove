import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionBarComponent } from './function-bar.component';
import { DurationModule } from './duration/duration.module';
import { SharedModule } from '../../shared/shared.module';
import { MiniListSongComponent } from './mini-list-song/mini-list-song.component';



@NgModule({
  declarations: [
    FunctionBarComponent,
    MiniListSongComponent
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

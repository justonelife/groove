import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniListSongComponent } from './mini-list-song.component';
import { SongItemComponent } from './song-item/song-item.component';



@NgModule({
  declarations: [
    MiniListSongComponent,
    SongItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiniListSongComponent
  ]
})
export class MiniListSongModule { }

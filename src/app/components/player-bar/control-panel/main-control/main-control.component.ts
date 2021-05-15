import { Component, OnInit } from '@angular/core';
import { 
  faPlay, 
  faStepBackward,
  faStepForward,
  faHeart,
  faRandom,
  faUndo,
  faPause 
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-control',
  templateUrl: './main-control.component.html',
  styleUrls: ['./main-control.component.scss']
})
export class MainControlComponent implements OnInit {

  backward = faStepBackward;
  forward = faStepForward;
  like = faHeart;
  public playStatus = faPlay;
  public playMode = faRandom;
  public liked: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchPlayMode(): void {
    this.onSwitchMode('playMode', faRandom, faUndo);
  }

  onToggleLike(): void {
    this.liked = !this.liked;
  }

  onPlayStatusSwitch(): void {
    this.onSwitchMode('playStatus', faPlay, faPause);
  }

  onSwitchMode(currentMode: string, modeA: any, modeB: any): void {
    this[currentMode] = this[currentMode] == modeA
      ? modeB
      : modeA;
  }

}

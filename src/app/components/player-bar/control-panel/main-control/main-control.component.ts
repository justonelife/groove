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
  public playMode: string = 'shuffle';
  public liked: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchPlayMode(): void {
    this.onSwitchModeCircle
      .apply(this, ['playMode', 'shuffle', 'repeat', 'repeat_one']);
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

  onSwitchModeCircle(): void {
    var properties: string = arguments[0];
    var currentMode: any = this[properties];
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] == currentMode) break;
    }
    var nextIndex = i + 1;;
    if (nextIndex == arguments.length) nextIndex = 1;
    this[properties] = arguments[nextIndex];
  }

}

import { Component, OnInit } from '@angular/core';
import { 
  faPlay, 
  faStepBackward,
  faStepForward,
  faHeart,
  faRandom,
  faUndo 
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-control',
  templateUrl: './main-control.component.html',
  styleUrls: ['./main-control.component.scss']
})
export class MainControlComponent implements OnInit {

  playIcon = faPlay;
  backward = faStepBackward;
  forward = faStepForward;
  like = faHeart;
  public playMode = faRandom;
  public liked: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchPlayMode(): void {
    this.playMode = this.playMode == faRandom
      ? faUndo
      : faRandom; 
  }

  onToggleLike(): void {
    this.liked = !this.liked;
  }

}

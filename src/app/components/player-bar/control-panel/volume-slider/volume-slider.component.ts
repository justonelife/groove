import { Component, OnInit } from '@angular/core';
import {
  faVolumeUp,
  faVolumeMute
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-volume-slider',
  templateUrl: './volume-slider.component.html',
  styleUrls: ['./volume-slider.component.scss']
})
export class VolumeSliderComponent implements OnInit {

  public volumeStatus = faVolumeUp;

  constructor() { }

  ngOnInit(): void {}

  onToggleVolumeStatus(): void {
    this.volumeStatus = this.volumeStatus == faVolumeUp
      ? faVolumeMute
      : faVolumeUp;
  }

}

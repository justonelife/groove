import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-volume-slider',
  templateUrl: './volume-slider.component.html',
  styleUrls: ['./volume-slider.component.scss']
})
export class VolumeSliderComponent implements AfterViewInit {

  @ViewChild('volumeSlider') slider: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.slider.nativeElement
      .addEventListener('input', this.handleInputChange.bind(this));
  }

  handleInputChange(): void {
    let target = this.slider.nativeElement;
    const min = target.min;
    const max = target.max;
    const value = target.value;
    target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%';
  }

}

import { 
  AfterViewInit, 
  Component, 
  ViewChild, 
  ElementRef,
  Input 
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {

  @ViewChild('volumeSlider') slider: ElementRef;
  @Input() widthSize: number;

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

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-view',
  templateUrl: './side-view.component.html',
  styleUrls: ['./side-view.component.scss']
})
export class SideViewComponent implements OnInit {

  @Input() toggleBtnIcon: string;
  public showSideView: Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideView(): void {
    this.showSideView = !this.showSideView;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss']
})
export class SongItemComponent implements OnInit {

  public randomUrl: string;

  constructor() { }

  ngOnInit(): void {
    var random = Math.floor(Math.random() * 400);
    if (random <= 100) this.randomUrl = 'https://picsum.photos/100';
    else if (random <= 200) this.randomUrl = 'https://picsum.photos/200';
    else if (random <= 300) this.randomUrl = 'https://picsum.photos/300';
    else this.randomUrl = 'https://picsum.photos/400';
  }

}

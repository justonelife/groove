import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navigate = [
    { name: 'explore', path: '/explore' },
    { name: 'personal', path: '/personal'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

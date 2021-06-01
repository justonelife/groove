import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniListSongComponent } from './mini-list-song.component';

describe('MiniListSongComponent', () => {
  let component: MiniListSongComponent;
  let fixture: ComponentFixture<MiniListSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniListSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniListSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

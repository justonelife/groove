import { Injectable } from '@angular/core';
import { Carouseltem } from '../models/carousel-item.model';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor() { }

  getCarouselData(): Carouseltem[] {
    return MOCK_CAROUSEL;
  }
}

const MOCK_CAROUSEL = [
  {
    urlImage: 'https://photo-zmp3.zadn.vn/banner/d/9/a/8/d9a81c58d5f76a0be8d126082a40d882.jpg',
    urlRedirect: 'https://photo-zmp3.zadn.vn/banner/d/9/a/8/d9a81c58d5f76a0be8d126082a40d882.jpg'
  },
  {
    urlImage: 'https://photo-zmp3.zadn.vn/banner/a/1/3/7/a137c8ef978208c69363303530d13f4d.jpg',
    urlRedirect: 'https://photo-zmp3.zadn.vn/banner/a/1/3/7/a137c8ef978208c69363303530d13f4d.jpg'
  },
  {
    urlImage: 'https://photo-zmp3.zadn.vn/banner/3/e/2/d/3e2dbf79ec085b603470d80e3e495c16.jpg',
    urlRedirect: 'https://photo-zmp3.zadn.vn/banner/3/e/2/d/3e2dbf79ec085b603470d80e3e495c16.jpg'
  },
  {
    urlImage: 'https://photo-zmp3.zadn.vn/banner/e/7/5/7/e75767acd4b0125e4dc99330f58cf5e5.jpg',
    urlRedirect: 'https://photo-zmp3.zadn.vn/banner/e/7/5/7/e75767acd4b0125e4dc99330f58cf5e5.jpg'
  }
]

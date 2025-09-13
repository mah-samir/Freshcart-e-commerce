import { Component } from '@angular/core';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule],
  templateUrl: './main-slider.html',
  styleUrl: './main-slider.css'
})
export class MainSlider {
  mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false
  }
}

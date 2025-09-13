import { OwlOptions } from './../../../../../node_modules/ngx-owl-carousel-o/lib/models/owl-options.model.d';
import { Component, inject, OnInit } from '@angular/core';
import { Categories } from '../../../core/services/categories/categories';
import { Icategories } from '../../../core/models/icategories';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-popular-categories',
  imports: [CarouselModule],
  templateUrl: './popular-categories.html',
  styleUrl: './popular-categories.css'
})
export class PopularCategories implements OnInit {
  private readonly categories = inject(Categories)

  categoriesList: Icategories[] = []

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  ngOnInit(): void {
    this.getAllCategoriesData()
  }
  getAllCategoriesData(): void {
    this.categories.getAllCategories().subscribe(
      {
        next: (res) => {
          this.categoriesList = res.data
        },
        error: (err) => { console.log(err) }
      }
    )
  }
}

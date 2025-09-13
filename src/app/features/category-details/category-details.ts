import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../core/services/products/products';
import { Iproducts } from '../../core/models/iproducts';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-category-details',
  imports: [CurrencyPipe],
  templateUrl: './category-details.html',
  styleUrl: './category-details.css'
})
export class CategoryDetails implements OnInit {
  private readonly products = inject(Products)
  private readonly route = inject(ActivatedRoute)

  categoryId!: string
  categoryList!: Iproducts[]
  loading = true;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id')!;
    this.getCategoryProductsData()
  }

  getCategoryProductsData(): void {

    this.products.getProductsByCategory(this.categoryId).subscribe({

      next: (res) => {
        console.log(res)
        this.loading = false;
        this.categoryList = res.data
      },

      error: (err) => {
        console.log(err)
        this.loading = false;

      }
    })

  }
}

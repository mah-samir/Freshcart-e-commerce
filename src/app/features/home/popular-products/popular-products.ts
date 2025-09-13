import { Component, inject, OnInit } from '@angular/core';
import { Iproducts } from '../../../core/models/iproducts';
import { Card } from "../../../shared/components/card/card";
import { Products } from '../../../core/services/products/products';

@Component({
  selector: 'app-popular-products',
  imports: [Card],
  templateUrl: './popular-products.html',
  styleUrl: './popular-products.css'
})
export class PopularProducts implements OnInit {

  private readonly products = inject(Products)

  productList!: Iproducts[]

  ngOnInit(): void {
    this.getProductsData()
  }

  getProductsData(): void {
    this.products.getallproducts().subscribe({
      next: (res) => { this.productList = res.data },
      error: (err) => { console.log(err) }
    })
  }
}

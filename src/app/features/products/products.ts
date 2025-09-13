import { Products as ProductsService } from './../../core/services/products/products';
import { Component, OnInit, inject } from '@angular/core';
import { Iproducts } from '../../core/models/iproducts';
import { Card } from "../../shared/components/card/card";
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { PSearchPipe } from '../../shared/pipes/p-search-pipe';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";


@Component({
  selector: 'app-products',
  imports: [Card, NgxPaginationModule, PSearchPipe, ɵInternalFormsSharedModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  private readonly productsService = inject(ProductsService)

  productList!: Iproducts[]
  pageSize!: number
  p!: number
  total!: number
  text:string=''
  sortBy: string = ''; 

  ngOnInit(): void {
    this.getProductsData()
  }

  getProductsData(pagenumber: number = 1): void {
    this.productsService.getallproducts(pagenumber).subscribe({
      next:(res) => {
        this.productList = res.data;
        this.pageSize = res.metadata.limit;
        this.p = res.metadata.currentPage;
        this.total = res.results
      },
      error: (err) => { console.log(err) }
    })
  }
}

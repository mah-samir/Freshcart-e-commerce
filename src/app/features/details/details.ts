import { Iproducts } from './../../core/models/iproducts';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SproductDetails } from './services/sproduct-details';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
private readonly activatedRoute   = inject(ActivatedRoute)
private readonly SproductDetails = inject(SproductDetails)

productDetails:Iproducts = {} as Iproducts

ngOnInit(): void {
    this.getProductid()
    this.getProductDetailsData()
}

id:string|null = null;

getProductid():void{
  this.activatedRoute.paramMap.subscribe({
    next:(urlParams)=>{
      this.id=urlParams.get('id')
    },
  })
}

getProductDetailsData():void{
  this.SproductDetails.getProductDetails(this.id).subscribe({
    next:(res)=>{this.productDetails=res.data},
  })
}
}

import { Component, inject, OnInit } from '@angular/core';
import { SCategory } from './services/s-category';
import { Icategories } from '../../core/models/icategories';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories implements OnInit {
  private readonly sCategory = inject(SCategory)

  categoryList!:Icategories[] 


ngOnInit(): void {
    this.getAllCategoriesData()
}


  getAllCategoriesData():void{
    this.sCategory.getAllCategories().subscribe({
      next:(res)=>{console.log(res)
        this.categoryList = res.data
      },
      error:(err)=>{console.log(err)}
    })
  }
}

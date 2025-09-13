import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../../core/services/products/products';
import { Iproducts } from '../../core/models/iproducts';
import { Card } from "../../shared/components/card/card";
import { MainSlider } from "./main-slider/main-slider";
import { PopularCategories } from "./popular-categories/popular-categories";
import { PopularProducts } from "./popular-products/popular-products";

@Component({
  selector: 'app-home',
  imports: [ MainSlider, PopularCategories, PopularProducts],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home  {

}

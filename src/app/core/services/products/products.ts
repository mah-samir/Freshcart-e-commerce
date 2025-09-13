import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Products {
  private readonly httpclient = inject(HttpClient)

  getallproducts(pagenumber: number = 1): Observable<any> {
    return this.httpclient.get(environment.baseUrl + `products?page=${pagenumber}`)
  }


  getProductsByCategory(categoryId: string): Observable<any> {
    return this.httpclient.get(`${environment.baseUrl}products?category[in]=${categoryId}`);
  }

}

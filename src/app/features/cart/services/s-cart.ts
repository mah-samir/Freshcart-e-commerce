import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SCart {
  private readonly httpClient = inject(HttpClient)
  private readonly cookieService = inject(CookieService)
  myheaders: object = {
    headers: {
      token: this.cookieService.get('token')
    }
  }

  addProductToCart(id: string): Observable<any> {
    return this.httpClient.post(environment.baseUrl + "cart", {
      "productId": id
    }, this.myheaders)
  }


  getLoggedUserCart(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'cart'
      , this.myheaders
    )
  }

  deleteSpecificCartItem(id: string): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + `cart/${id}`, this.myheaders)
  }

  updateCount(id: string, count: number): Observable<any> {
    return this.httpClient.put(environment.baseUrl + `cart/${id}`, {
      "count": count
    }, this.myheaders)
  }

  checkOutSession(id:string | null,data:object):Observable<any>{
    return this.httpClient.post(environment.baseUrl+`orders/checkout-session/${id}?url=http://localhost:4200`,data,this.myheaders)
  }
}

import { Component, inject, Input } from '@angular/core';
import { Iproducts } from '../../../core/models/iproducts';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { PTermPipe } from '../../pipes/p-term-pipe';
import { SCart } from '../../../features/cart/services/s-cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink, CurrencyPipe, PTermPipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input({ required: true }) product: Iproducts = {} as Iproducts

  private readonly sCart = inject(SCart)
  private readonly toastrService = inject(ToastrService)

  addProductItemToCart(id: string): void {
    this.sCart.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res)
        if (res.status === "success") {
          this.toastrService.success(res.message, "FreshCart")
        }

      },
      error: (err) => { console.log(err) }
    })
  }


}

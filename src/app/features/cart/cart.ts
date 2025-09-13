import { Component, inject, OnInit } from '@angular/core';
import { SCart } from './services/s-cart';
import { CartDetails } from './models/cart-details';
import { PTermPipe } from '../../shared/pipes/p-term-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [PTermPipe, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {

  private readonly sCart = inject(SCart)

  cartDetails: CartDetails = {} as CartDetails

  ngOnInit(): void {
    this.getLoggedUserData()
  }

  getLoggedUserData(): void {
    this.sCart.getLoggedUserCart().subscribe({

      next: (res) => { this.cartDetails = res.data },
      error: (err) => { console.log(err) }

    })
  }

  removeItem(id: string) {
    this.sCart.deleteSpecificCartItem(id).subscribe({
      next: (res) => {
        console.log(res)
        this.cartDetails = res.data
      },
      error: (err) => { console.log(err) }
    })
  }

  updateCartCount(id: string, count: number): void {
    this.sCart.updateCount(id, count).subscribe({
      next: (res) => {
        this.cartDetails = res.data
        console.log(res)

      },
      error: (err) => { console.log(err) }
    })
  }


}

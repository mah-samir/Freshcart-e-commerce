import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CInput } from "../../shared/components/c-input/c-input";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SCart } from '../cart/services/s-cart';

@Component({
  selector: 'app-chekout',
  imports: [ReactiveFormsModule, CInput],
  templateUrl: './chekout.html',
  styleUrl: './chekout.css'
})
export class Chekout implements OnInit {
  private readonly fb = inject(FormBuilder)
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly sCart = inject(SCart)


  chekoutForm!: FormGroup
  id: string | null = null

  ngOnInit(): void {
    this.initForm()
    this.getCardId()
  }
  initForm(): void {
    this.chekoutForm = this.fb.group({
      shippingAddress: this.fb.group({
        details: [null, [Validators.required]],
        phone: [null, [Validators.pattern(/^01[0125][0-9]{8}$/)]],
        city: [null, [Validators.required]]
      })
    })
  }
  getCardId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (urlParams) => {
        this.id = urlParams.get('id')
        console.log(this.id)
      },

    })
  }


  submitForm(): void {
    if (this.chekoutForm.valid) {
      console.log()
    }
    this.sCart.checkOutSession(this.id, this.chekoutForm.value).subscribe({
      next:(res)=>
        {
          if(res.status === "success")
          {
            window.open(res.session.url , "_self")
          }
        }
    })
  }
}

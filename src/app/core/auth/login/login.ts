import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';

import { Auth } from '../auth';
import { Router, RouterLink } from '@angular/router';
import { CInput } from "../../../shared/components/c-input/c-input";
import { Subscription } from 'rxjs';
import { unsubscribe } from 'diagnostics_channel';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CInput, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private readonly auth = inject(Auth)
  private readonly router = inject(Router)
  private readonly cookieService = inject(CookieService)

  msgError: string = "";
  isLoading: boolean = false
  subscribtion:Subscription = new Subscription()
  loginForm: FormGroup = new FormGroup({

    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),


  });


  submit(): void {
    if (this.loginForm.valid) {

      this.subscribtion.unsubscribe()
      
      this.isLoading = true
      this.subscribtion=this.auth.loginForm(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.message === 'success') {
            this.msgError = '';
            setTimeout(() => {
              this.cookieService.set("token",res.token)
              this.router.navigate(['/home'])
            }, 2000);
          }
          this.isLoading = false
        }
        , error: (err) => {
          console.log(err)
          this.msgError = err.error.message
          this.isLoading = false
        }
      })
    }
  }
}

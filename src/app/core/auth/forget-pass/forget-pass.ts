import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CInput } from "../../../shared/components/c-input/c-input";
import { Auth } from '../auth';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  imports: [ReactiveFormsModule, CInput],
  templateUrl: './forget-pass.html',
  styleUrl: './forget-pass.css'
})
export class ForgetPass implements OnInit {

  private readonly fb = inject(FormBuilder)
  private readonly auth = inject(Auth)
  private readonly cookieService = inject(CookieService)
  private readonly router = inject(Router)

  ngOnInit(): void {
    this.initForm()
  }

  verifyEmail!: FormGroup
  verifyCode!: FormGroup
  resetPassword!: FormGroup
  step: number = 1

  initForm(): void {
    this.verifyEmail = this.fb.group({
      email: [null, [Validators.email]]
    })
    this.verifyCode = this.fb.group({
      resetCode: [null, [Validators.required]]
    })
    this.resetPassword = this.fb.group({
      email: [null, [Validators.email]],
      newPassword: [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })
  }

  formStep1(): void {
    if (this.verifyEmail.valid) {
      this.auth.submitVerifyEmail(this.verifyEmail.value).subscribe({
        next: (res) => {
          console.log(res)
          this.step = 2
        }

      })
    }


  }

  formStep2(): void {
    if (this.verifyCode.valid) {
      this.auth.submitVerifycode(this.verifyCode.value).subscribe({
        next: (res) => {
          console.log(res)
          this.step = 3
        }

      })
    }


  }
  formStep3(): void {
    if (this.resetPassword.valid) {
      this.auth.submitrResetPassword(this.resetPassword.value).subscribe({
        next: (res) => {
          console.log(res)
          this.cookieService.set('token', res.token)
          this.router.navigate(['/home'])
        }

      })
    }


  }
}

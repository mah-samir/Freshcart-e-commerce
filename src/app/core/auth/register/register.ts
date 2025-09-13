import { Auth } from './../auth';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CInput } from "../../../shared/components/c-input/c-input";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CInput],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private readonly auth = inject(Auth)
  private readonly router = inject(Router)
  subscribtion: Subscription = new Subscription

  msgError: string = "";
  isLoading: boolean = false
  flag: boolean = true

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),
    rePassword: new FormControl(null, [Validators.required]),

    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)
    ])
  }, { validators: this.confirmPassword });

  confirmPassword(group: AbstractControl) {
    if (group.get("password")?.value === group.get("rePassword")?.value)
      return null
    else
      group.get('rePassword')?.setErrors({ mismatch: true })
    return { mismatch: true }
  };


  submit(): void {
    if (this.registerForm.valid) {
      this.subscribtion.unsubscribe()
      this.isLoading = true
      this.subscribtion = this.auth.registeration(this.registerForm.value).subscribe({
        next: (res) => {
          if (res.message === 'success') {
            this.msgError = '';
            setTimeout(() => {
              this.router.navigate(['/login'])
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
    else {
      this.registerForm.get('rePassword')?.patchValue('@')
      this.registerForm.markAllAsTouched()
    }
  }
}

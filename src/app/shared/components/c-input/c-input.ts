import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-c-input',
  imports: [ReactiveFormsModule],
  templateUrl: './c-input.html',
  styleUrl: './c-input.css'
})
export class CInput {
  @Input() control!: any
  @Input() typeInput!: string
  @Input() idInput!: string
  @Input() labelInput!: string
  @Input() element:string='input'
  flag: boolean = true

}

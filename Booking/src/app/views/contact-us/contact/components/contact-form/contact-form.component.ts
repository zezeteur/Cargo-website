import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styles: ``,
})
export class ContactFormComponent {
  contactForm!: UntypedFormGroup
  submitted: boolean = false

  private fb = inject(UntypedFormBuilder)

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }

  get form() {
    return this.contactForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}

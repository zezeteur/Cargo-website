import { credits, currentYear } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  Validators, FormBuilder, FormGroup,
} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { Store } from '@ngrx/store'
import { AuthenticationService } from '@core/services/auth.service';
import { User } from '@core/models'

@Component({
  selector: 'auth-sign-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styles: `
    :host(auth-sign-in) {
      display: contents;
    }
  `,
})
export class SignInComponent implements OnInit {
  creditsBy = credits
  currentYear: any = currentYear;

  submitted: boolean = false
  signinForm!: FormGroup
  passwordType: boolean = true
  store = inject(Store)

  constructor(private frmBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {
  }

  createForm() {
    this.signinForm =  this.frmBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  submitData() {
    if (this.signinForm.valid) {
      console.log(this.signinForm.value);
      this.authService.connexion(this.signinForm.value).subscribe({
        next: (user: User) => {
          console.log('User authenticated successfully', user);
          this.router.navigate(['/flights/home']);
        },
        error: (error) => {
          console.error('Error while authenticating user', error);
        },
      });
    }
  }

  changeType() {
    this.passwordType = !this.passwordType
  }

  ngOnInit(): void {
    this.createForm();
  }
}

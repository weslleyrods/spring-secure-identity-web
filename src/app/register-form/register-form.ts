import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { User } from '../services/user';
import { Router } from '@angular/router';
import { CdkAriaLive } from "../../../node_modules/@angular/cdk/types/_a11y-module-chunk";

@Component({
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {

  private userService = inject(User);
  private router = inject(Router);


   registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if(!this.registerForm.valid) return
    const{ name, email, password } = this.registerForm.value;
    this.userService.register(name!, email!, password!).subscribe({
      next: (response) => {
        alert('Registration successful! Please log in.');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        alert('Registration failed. Please try again.');
      },
    });


  }
}

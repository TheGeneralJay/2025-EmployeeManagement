import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  styleUrl: './register.component.css',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  // Registration info structure.
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  // Submit method.
  handleSubmit() {
    // Build a user object to submit to the DB.
    let newUser = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }

    // Logic to handle the submit goes here.
    console.log(newUser);
  }
}

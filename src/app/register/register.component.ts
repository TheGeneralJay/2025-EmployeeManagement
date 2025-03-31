import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { gql, request } from 'graphql-request';
import { uri } from '../graphql/graphql.provider';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router) { }

  // Login query function.
  async signup(emailInput: String, usernameInput: String, passwordInput: String) {

    // GQL query document to send to the API.
    const document = gql`
      mutation Signup($userInput: UserInput) {
        signup(userInput: $userInput) {
          username
          email
          password
          created_at
          updated_at
        }
      }
    `
    // Variables to use with the query document.
    const variables = {
      userInput: {
        email: emailInput,
        username: usernameInput,
        password: passwordInput
      }
    }


    const req = await request(
      uri,
      document,
      variables
    );

    return req;
  }

  // Submit handler.
  async onSubmit(loginForm: NgForm) {
    const formInput = loginForm.form.value;

    let register: any;
    let res: string;

    try {
      register = await this.signup(formInput["email-input"], formInput["username-input"], formInput["password-input"]);
      res = register
      this.router.navigate(["/login"]);
    } catch {
      alert("ERROR: There was an error while registering. Please try again.");
      this.router.navigate(["/register"]);
    }
  }
}

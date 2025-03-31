import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { gql, request } from 'graphql-request';
import { Router, RouterLink } from '@angular/router';
import { uri } from '../graphql/graphql.provider';
import short from 'short-uuid';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  // Login query function.
  async login(usernameInput: string, passwordInput: string) {

    // GQL query document to send to the API.
    const document = gql`
      query Login($username: String!, $password: String!) {
        login(username: $username, password: $password ) {
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
      username: usernameInput,
      password: passwordInput
    }


    const req = await request(
      uri,
      document,
      variables
    );

    // Save username.
    localStorage.setItem("user", usernameInput);
    return req;
  }

  // Submit handler.
  async onSubmit(loginForm: NgForm) {
    const formInput = loginForm.form.value;

    let login: any;
    let res: string;

    try {
      login = await this.login(formInput["username-input"], formInput["password-input"]);
      res = login

      const authId = short.generate();

      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("sessionId", authId);

      this.router.navigate(["/employee"]);
    } catch {
      alert("ERROR: There was an error logging in. Please try again.");
      this.router.navigate(["/login"]);
    }
  }
}

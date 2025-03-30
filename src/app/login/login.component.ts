import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { gql, request } from 'graphql-request';
import { Router } from '@angular/router';
import { uri } from '../graphql/graphql.provider';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  // Login query function.
  async login(usernameInput: String, passwordInput: String) {

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

    return req;
  }

  // Submit handler.
  async onSubmit(loginForm: NgForm) {
    const formInput = loginForm.form.value;

    let login: any;
    let res: String;

    login = await this.login(formInput["username-input"], formInput["password-input"]);
    res = login

    console.log(res);
  }
}

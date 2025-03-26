import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  login: boolean = true;
  username: string = "";
  email: string = "";
  password: string = "";

  constructor(private authService: AuthenticationService) {

  }

  ngOnInit() {

  }

  confirm() {

  }

  saveUser(id: string, token: string) {
    localStorage.setItem("USER_ID", id);
    localStorage.setItem("USER_TOKEN", token);

    this.authService.setUserId(id);
  }

}

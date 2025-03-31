import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  username: any;
  loggedIn: boolean = false;

  constructor(private router: Router) { }

  async ngOnInit() {
    this.username = localStorage.getItem("user")?.toUpperCase();

    if (localStorage.getItem("loggedIn") == "true") {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}

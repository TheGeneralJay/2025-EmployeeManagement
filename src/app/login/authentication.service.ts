import {Injectable} from '@angular/core';

export class AuthenticationService {
  private userId: string = "";

  constructor() {

  }

  saveUserData(id: string, token: string) {
    localStorage.setItem("USER_ID", id);
    localStorage.setItem("USER_TOKEN", token);

    this.setUserId(id);
  }

  setUserId(id: string) {
    this.userId = id;
  }

  logout() {
    localStorage.removeItem("USER_ID");
    localStorage.removeItem("USER_TOKEN");

    this.userId = "";
  }
}

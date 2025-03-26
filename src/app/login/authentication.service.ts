import { Injectable } from "@angular/core";
import { Apollo, gql, QueryRef } from "apollo-angular";

export interface User {
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class AuthenticationService {
  private userId: string = "";
  private loginQuery: QueryRef<User>;

  constructor(private apollo: Apollo) {
    this.loginQuery = this.apollo.watchQuery({
      query: gql`
        query Login {
          login(username: username, password: password) {
            username
            email
            password
            created_at
            updated_at
          }
        }
      `
    })
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

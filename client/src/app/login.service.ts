import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login() {
    return this.http.get("http://localhost:8000/auth/facebook");
  }

  getUser(id: string) {
    return this.http.get("http://localhost:8000/users/" + id);
  }
}

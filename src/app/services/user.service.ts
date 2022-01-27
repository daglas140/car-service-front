import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../model/user'
import { from, Observable } from 'rxjs';


@Injectable({
 providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public login(user: string, pass: string) {
    const headers = new HttpHeaders({Authorization: 'Basic ' +btoa(user+":"+pass)});
    this.http.get("http://localhost:8080/user/login", {headers, responseType: 'text' as 'json'})
  }

  public getUser() {
      const headers = new HttpHeaders({Authorization: 'Basic ' +btoa("admin"+":"+"P@ssw0rd")});
      return this.http.get("http://localhost:8080/user/getUser", {headers})
   }
}


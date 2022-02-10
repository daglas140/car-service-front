import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserServiceContants } from '@services/httpServiceContants/UserServiceContants';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  public login(user: string, pass: string) {
    const url = environment.serverAddress + UserServiceContants.LOGIN;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(user + ':' + pass) });
    this.http.get(url, { headers, responseType: 'text' as 'json' });
  }

  public getUser() {
    const url = environment.serverAddress + UserServiceContants.GET_USER;
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('admin' + ':' + 'P@ssw0rd') });
    return this.http.get(url, { headers });
  }
}


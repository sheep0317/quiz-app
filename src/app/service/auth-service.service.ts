import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    console.log(credentials);
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, {observe: 'response'});
  }

  register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      userName: user.username,
      email: user.email,
      password: user.password,
      name: user.fullname,
      gender: user.gender,
      role: user.role
    }, {observe: 'response'});
  }
}

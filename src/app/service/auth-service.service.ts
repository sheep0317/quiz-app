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

  getHeaders() {
    const tokens = localStorage.getItem('jwt');
    return tokens ? new HttpHeaders().set('Authorization', 'Bearer ' + tokens) : null;
  }

  login(credentials: any): Observable<any> {
    console.log(credentials);
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, { observe: 'response' });
  }

  register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      userName: user.username,
      email: user.email,
      password: user.password,
      name: user.fullname,
      gender: user.gender,
      role: user.role
    }, { observe: 'response' });
  }

  checkJwt() {
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(AUTH_API + "jwt-check-role", { headers: header, observe: 'response'  },).toPromise();
    return this.http.get(AUTH_API + "jwt-check-role",{observe: 'response'  }).toPromise();
  }

  checkRole(role:String){
    let header = this.getHeaders();
    let rq = role+"/authorize";
    if (header instanceof HttpHeaders)
      return this.http.get(AUTH_API + rq, { headers: header, observe: 'response'  },).toPromise();
    return this.http.get(AUTH_API + rq,{observe: 'response'  }).toPromise();
    
  }
}

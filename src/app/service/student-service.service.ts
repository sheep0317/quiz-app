import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const API_LINK = 'http://localhost:8080/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }
  getHeaders() {
    const tokens = localStorage.getItem('jwt');

    return tokens ? new HttpHeaders().set('Authorization', 'Bearer ' + tokens).set('Content-Type', 'application/json') : null;
  }

  getListClass() {
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/getclasses", { headers: header , observe: 'response'});
    return this.http.get(API_LINK+"/getclasses" , {observe: 'response'});
  }
}

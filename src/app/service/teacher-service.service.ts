import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const API_LINK = 'http://localhost:8080/teacher';
@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor(private http: HttpClient) { }
  getHeaders() {
    const tokens = localStorage.getItem('jwt');

    return tokens ? new HttpHeaders().set('Authorization', 'Bearer ' + tokens) : null;
  }
  
  getListClass() {
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/listclass", { headers: header }).toPromise();
    return this.http.get(API_LINK+"/listclass").toPromise();
  }
}

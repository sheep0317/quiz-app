import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const API_LINK = 'http://localhost:8080/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient ) { }
  getHeaders() {
    const tokens = localStorage.getItem('jwt');
    return tokens ? new HttpHeaders().set('Authorization', 'Bearer ' + tokens) : null;
  }

  getInformation() {
    
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/detail" , { headers: header , observe: 'response'});
    return this.http.get(API_LINK+"/detail", {observe: 'response'});
  }

  changePassword(credentials: any){
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/changepass", 
        {
          oldpass: credentials.currentPassword,
          newpass: credentials.newPassword
        }, { headers: header, observe: 'response' });
    return this.http.post(API_LINK+"/changepass", 
      {
        oldpass: credentials.currentPassword, 
        newpass: credentials.newPassword
      }, {observe: 'response'});
  }
}

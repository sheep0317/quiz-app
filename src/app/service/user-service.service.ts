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

  editProfile(name:string, phone: string, gender: string, address: string)
  {
    let body = {name:name, phone:phone, gender:gender, address:address}
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/editprofile",body,{ headers: header , observe: 'response', responseType:'text'}).toPromise();
    return this.http.post(API_LINK+"/editprofile",body,{observe: 'response',responseType:'text'}).toPromise();
  }
}

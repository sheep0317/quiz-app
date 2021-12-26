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
    let body = { oldpass: credentials.currentPassword,
      newpass: credentials.newPassword}
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/changepass", body, { headers: header, observe: 'response' ,responseType:'text'});
    return this.http.post(API_LINK+"/changepass", body, {observe: 'response', responseType:'text'});
  }

  editProfile(name:string, phone: string, gender: string, address: string)
  {
    let body = {name:name, phone:phone, gender:gender, address:address}
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/editprofile",body,{ headers: header , observe: 'response', responseType:'text'}).toPromise();
    return this.http.post(API_LINK+"/editprofile",body,{observe: 'response',responseType:'text'}).toPromise();
  }

  getActivity()
  {
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/get-activities" , { headers: header , observe: 'response'}).toPromise();
    return this.http.get(API_LINK+"/get-activities", {observe: 'response'}).toPromise();
  }

  backToClassFromTest(testId: string){
    let param = new HttpParams().set("testId",testId);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/back-to-class-from-test",{ headers: header ,params: param, observe: 'response', responseType:'text'}).toPromise();
    return this.http.get(API_LINK+"/back-to-class-from-test",{params: param, observe: 'response', responseType:'text'}).toPromise();
  }

  backToClassFromSection(sectionId:string){
    let param = new HttpParams().set("sectionId",sectionId);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/back-to-class-from-section",{ headers: header ,params: param, observe: 'response', responseType:'text'}).toPromise();
    return this.http.get(API_LINK+"/back-to-class-from-section",{params: param, observe: 'response', responseType:'text'}).toPromise();
  }

}

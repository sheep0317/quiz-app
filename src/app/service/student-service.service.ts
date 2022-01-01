import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TheAnswer } from '../models/theAnswer.model';

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
      return this.http.get(API_LINK+"/getclasses", { headers: header , observe: 'response'}).toPromise();
    return this.http.get(API_LINK+"/getclasses" , {observe: 'response'}).toPromise();
  }

  getClassDetail(id:string){
    let param = new HttpParams().set("id",id);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/classdetail",{ headers: header ,params: param, observe: 'response'}).toPromise();
    return this.http.get(API_LINK+"/classdetail",{params: param, observe: 'response'}).toPromise();
  }

  getTest(id:string){
    let param = new HttpParams().set("testId",id);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/get-test",{ headers: header ,params: param, observe: 'response'}).toPromise();
    return this.http.get(API_LINK+"/get-test",{params: param, observe: 'response'}).toPromise();
  }

  getTestScores(id:string){
    let param = new HttpParams().set("testId",id);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/get-score-statistics",{ headers: header ,params: param, observe: 'response'}).toPromise();
    return this.http.get(API_LINK+"/get-score-statistics",{params: param, observe: 'response'}).toPromise();
  }

  startDoTest(testId:string){
    let param = new HttpParams().set("id",testId);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.get(API_LINK+"/starttest",{ headers: header ,params: param, observe: 'response'}).toPromise();
    return this.http.get(API_LINK+"/starttest",{params: param, observe: 'response'}).toPromise();
  }

  submitTest(test:TheAnswer[], testId:string){
    let param = new HttpParams().set("id",testId);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/submittest",test,{ headers: header ,params: param, observe: 'response', responseType:'text'}).toPromise();
    return this.http.post(API_LINK+"/submittest",test,{params: param, observe: 'response', responseType:'text'}).toPromise();
  }

  withdrawFromClass(classId:string){
    let param = new HttpParams().set("id",classId);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/withdraw-from-class",{},{ headers: header ,params: param, observe: 'response', responseType:'text'}).toPromise();
    return this.http.post(API_LINK+"/withdraw-from-class",{},{params: param, observe: 'response', responseType:'text'}).toPromise();
  
  }
  

}

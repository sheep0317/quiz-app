import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Test } from '../models/test.model';

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
      return this.http.get(API_LINK+"/getClasses", { headers: header, observe: 'response'}).toPromise();
    return this.http.get(API_LINK+"/getClasses", {observe: 'response'}).toPromise();
  }

  createNewClass(name:string){
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/addNewClass",{name:name}, { headers: header, responseType:'text'}).toPromise();
    return this.http.post(API_LINK+"/addNewClass",{name:name},{responseType:'text'}).toPromise();
  }

  createNewSection(name:string, classId: string){
    let param = new HttpParams().set("classId",classId);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/addClassSection",{name:name}, { headers: header ,params: param, responseType:'text'}).toPromise();
    return this.http.post(API_LINK+"/addClassSection",{name:name}, {params: param, responseType:'text'}).toPromise();
  
  }

  createNewTest(test:Test, sectionId: string){
    let param = new HttpParams().set("sectionId",sectionId);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/addNewTest",test, { headers: header ,params: param, responseType:'text'}).toPromise();
    return this.http.post(API_LINK+"/addNewTest",test, {params: param, responseType:'text'}).toPromise();
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

  editClassName(id:string, name:string){
    let param = new HttpParams().set("id",id);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/editclass",{name:name},{ headers: header ,params: param, responseType:'text'}).toPromise();
    return this.http.post(API_LINK+"/editclass",{name:name},{params: param, responseType:'text'}).toPromise();
  }

  deleteClass(id:string){
    let param = new HttpParams().set("id",id);
    let header = this.getHeaders();
    if (header instanceof HttpHeaders)
      return this.http.post(API_LINK+"/deleteClass",{},{ headers: header ,params: param, responseType:'text'}).toPromise();
    return this.http.post(API_LINK+"/deleteClass",{},{params: param, responseType:'text'}).toPromise();
  }


}

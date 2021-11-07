import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, ) { }
  url= ``
  ngOnInit(): void {
  }
  login(email:String, pass: String){
    /*
     this.http.get(this.url).subscribe(data => {
      console.log(data)
      localStorage.setItem('token', data.toString())
    })   
     */
   
  }
}

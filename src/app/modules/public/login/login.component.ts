import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../../../service/auth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthServiceService ) { }
  url= `http://localhost:8080/login`
  package = {
    username: '',
    password: ''
  }
  ngOnInit(): void {
  }
  login(username: string, pass: string){
    this.package.username = username;
    this.package.password = pass;
    /*
    this.auth.login(this.package).subscribe(data => {
      
    })
     */
  }
}

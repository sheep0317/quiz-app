import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signin(email: String, pass: String, displayName: String, passCfm: String, role: String){
    console.log("" + email + pass + displayName + passCfm + role);
  }
}

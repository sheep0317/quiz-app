import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  signin(email: string, password: string, displayName: string, cfmPassword: string, role: string) {
    console.log(email, password);
  }

}

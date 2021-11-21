import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor() { }
  img = "https://i.ytimg.com/vi/iexyJCQiZu0/maxresdefault.jpg"
  ngOnInit(): void {
  }
  changePassword(current: String, newPass: String, cfmPass: String){
  }
  editProfile(phone: string, gender: string, birthday: string, address: string){
    console.log(phone + gender + address + birthday)
  }
}

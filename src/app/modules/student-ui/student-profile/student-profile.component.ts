import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../service/user-service.service'
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  userInformation: any
  constructor(private user: UserServiceService) { }
  img = "https://i.ytimg.com/vi/iexyJCQiZu0/maxresdefault.jpg"
  ngOnInit(): void {
   this.user.getInformation().subscribe(
     data => {
       this.userInformation = data.body
     },
     err => {
       console.log(err)
     }
   )
  }
  changePassword(current: String, newPass: String, cfmPass: String){
  }
  editProfile(phone: string, gender: string, birthday: string, address: string){
    console.log(phone + gender + address + birthday)
  }
}

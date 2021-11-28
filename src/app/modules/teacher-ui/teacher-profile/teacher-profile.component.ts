import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../service/user-service.service'
import {  Validators, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {
  userInformation: any;
  changepassForm = this._formBuilder.group({
    currentPassword: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  })
  constructor(private user: UserServiceService, public _formBuilder: FormBuilder) { }
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
   changePassword(){
      this.user.changePassword(this.changepassForm).subscribe(
        data =>{
          console.log(data)
        },
        err => {
          console.log(err)
        }
      )
  
  }
  editProfile(phone: string, gender: string, birthday: string, address: string){
    console.log(phone + gender + address + birthday)
  }
}

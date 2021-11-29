import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../service/user-service.service'
import {  Validators, FormBuilder} from '@angular/forms'
import { User } from 'src/app/model/user.model';
import { ObjectId } from 'bson';
@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {
  userInformation: User;
  changepassForm = this._formBuilder.group({
    currentPassword: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  })
  constructor(private user: UserServiceService, public _formBuilder: FormBuilder) {
    this.userInformation = {
      name: '',
      email: '@',
      phone: '',
      gender: true,
      birthday: '',
      role: 'role',
      address: '',
      id: new ObjectId()
    };
   }
  img = "https://i.ytimg.com/vi/iexyJCQiZu0/maxresdefault.jpg"
  ngOnInit(): void {
   this.user.getInformation().subscribe(
     data => {
       if(data.body != null)
       {
        this.userInformation = data.body as User;
       }
       
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

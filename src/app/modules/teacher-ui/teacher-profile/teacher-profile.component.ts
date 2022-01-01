import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../service/user-service.service'
import { Validators, FormBuilder } from '@angular/forms'
import { User } from 'src/app/model/user.model';
import { ObjectId } from 'bson';
import { ToastrService } from 'ngx-toastr';
import { Class } from 'src/app/model/Class';
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
  constructor(private user: UserServiceService, public _formBuilder: FormBuilder, private toastr: ToastrService) {
    this.userInformation = {
      name: '',
      email: '@',
      phone: '',
      gender: true,
      birthday: '',
      role: 'role',
      address: '',
      id: new ObjectId(),
      recentClass: []
    };
  }
  img = "https://i.ytimg.com/vi/iexyJCQiZu0/maxresdefault.jpg"
  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.user.getInformation().subscribe(
      data => {
        if (data.body != null) {
          console.log(data)
          this.userInformation = data.body as User;
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  changePassword() {
    
    this.user.changePassword(this.changepassForm.value).subscribe(
      data => {
        console.log(data)
        this.changepassForm.reset()
        this.showToastr(true, data.body)
      },
      err => {
        console.log(err)
        this.showToastr(false, err.error)
      }
    )

  }
  editProfile(name: string, phone: string, gender: string, address: string) {
    this.user.editProfile(name, phone, gender, address).then(
      (data: any) => {
        console.log(data)
        this.showToastr(true, data.body)
        this.getInfo()
      }
    ).catch(
      (er: any) => {
        console.log(er.error.message);
        this.showToastr(false, er.error)
      }
    )
  }

  showToastr(success: boolean, message: any) {
    if (success) {
      this.toastr.success(message, "", {
        timeOut: 2000,
        progressBar: true
      })
    }
    else {
      this.toastr.error(message, "", {
        timeOut: 2000,
        progressBar: true
      })
    }
  }
}

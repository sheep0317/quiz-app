import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserServiceService } from '../../../service/user-service.service'
import { ObjectId } from 'bson';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  
  showId:boolean = false;
  userInformation: User;
  changepassForm = this._formBuilder.group({
    currentPassword: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  })
  constructor(private user: UserServiceService,public _formBuilder: FormBuilder, private _clipboardService: ClipboardService, private toastr: ToastrService ) {
    this.userInformation = {
      name: '',
      email: '@',
      phone: '',
      gender: true,
      birthday: '',
      role: 'role',
      address: '',
      id: new ObjectId(),
      recentClass:[]
    };
  }
  img = "https://i.ytimg.com/vi/iexyJCQiZu0/maxresdefault.jpg"
  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){
    this.user.getInformation().subscribe(
      data => {
        console.log(data);
        if (data.body != null)
          this.userInformation = data.body as User;
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
        this.showToastr(false, err.error.message)
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
        this.showToastr(false, er.error.message)
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
  password() {
    this.showId = !this.showId;
  }
  copyToClipboard(id: string){
    this._clipboardService.copy(id)
    this.toastr.success('Sao chép thành công!', 'Thông báo',
      {
        timeOut: 1000,
        progressAnimation: 'decreasing',
        progressBar: true,
      }
    )
  }
}

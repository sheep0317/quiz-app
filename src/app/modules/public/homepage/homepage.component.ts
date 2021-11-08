import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          opacity: 0.1,
          transform: 'translateX(50px)'
        }),
        animate("0.3s")
      ]),
    ])
  ]
})
export class HomepageComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    repeatpassword: new FormControl(''),
    email: new FormControl(''),
    fullname: new FormControl(''),
    gender: new FormControl('true'),
    role: new FormControl('student')
  });

  isLogin: boolean = true;
  passwdConfirmCorrect: boolean = true;

  constructor(private authService: AuthServiceService, private toastr: ToastrService) { }
  title = 'Homepage';
  ngOnInit(): void {
  }

  toggle_login_register(input: boolean) {
    this.isLogin = input;
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      data => {

        console.log(data)
      },
      err => {
        console.error("error:" + err);
      }
    )
  }

  onRegiste() {
    console.log(this.registerForm.value);
    if (this.registerForm.value.password != this.registerForm.value.repeatpassword) {
      this.passwdConfirmCorrect = false;
      console.log("password not match")
    }
    else {
      this.authService.register(this.registerForm.value).subscribe(
        (data) => {
          console.log(data)
          if (data.status == 208) {
            console.log(data.status)
          }
          this.isLogin = true;
          this.showToastr(true,data.body.message);
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.status);
          this.showToastr(false,err.error.message);

        }
      )
    }

  }


  showToastr(success: boolean, message: any){
    if(success){
      this.toastr.success(message,"",{
        timeOut: 5000,
        progressBar: true
      })
    }
    else{
      this.toastr.error(message,"",{
        timeOut: 5000,
        progressBar: true
      })
    }
  }

}

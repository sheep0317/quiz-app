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
import { ActivatedRoute, Router } from '@angular/router';

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
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    repeatpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    fullname: new FormControl('', Validators.required),
    gender: new FormControl('true', Validators.required),
    role: new FormControl('student', Validators.required)
  });

  isLogin: boolean = true;
  passwdConfirmCorrect: boolean = true;
  isSubmit: any = [false, false]

  title = 'Homepage';

  constructor(private authService: AuthServiceService, private toastr: ToastrService, private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
    let jwt = localStorage.getItem("jwt");
    if(jwt!=null)
    {
      this.authService.checkJwt().then(
        (data: any) => {
          console.log(data.body.role);
          if (data.body.role == "student") {
            this.router.navigate(['/student']);
          }
          else if (data.body.role == "teacher") {
            this.router.navigate(['/teacher']);
          }
        }
      ).catch(err => {
        localStorage.removeItem("jwt");
        console.log(err);
        this.router.navigate(['/home']);
      }
      )
    }
    
}

toggle_login_register(input: boolean) {
  this.isLogin = input;
}

onLogin() {
  console.log(this.loginForm.value);
  this.isSubmit[0] = true;
  if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        console.log(data)
        this.showToastr(true, "Đăng nhập thành công!");
        localStorage.setItem("jwt", data.body.accessToken)
        localStorage.setItem('username',this.loginForm.value.username);
        if (data.body.role == "student") {
          this.router.navigate(['/student']);
        }
        else if (data.body.role == "teacher") {
          this.router.navigate(['/teacher']);
        }
      },
      err => {
        console.error("error:" + err);
        this.showToastr(false, err.error.message);
      }
    )
  }
}

onRegiste() {
  console.log(this.registerForm.value);
  this.isSubmit[1] = true;
  if (this.registerForm.valid)
    if (this.registerForm.value.password != this.registerForm.value.repeatpassword) {
      this.passwdConfirmCorrect = false;
      console.log("password not match")
      this.showToastr(false, "Password is not matched");
    }
    else {
      this.authService.register(this.registerForm.value).subscribe(
        (data) => {
          console.log(data)
          if (data.status == 208) {
            console.log(data.status)
          }
          this.isLogin = true;
          this.showToastr(true, data.body.message);
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.status);
          this.showToastr(false, err.error.message);

        }
      )
    }

}


showToastr(success: boolean, message: any) {
  if (success) {
    this.toastr.success(message, "", {
      timeOut: 5000,
      progressBar: true
    })
  }
  else {
    this.toastr.error(message, "", {
      timeOut: 5000,
      progressBar: true
    })
  }
}

}

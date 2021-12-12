import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Class } from 'src/app/model/Class';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {

  imgUrl = "./../../../../assets/img/smol_gura.jpeg";

  listQuiz: Class[] = [
  ]

  classForm: FormGroup;

  wantedDel:string = "";
  isOpenDialog:boolean = false;



  constructor(private studentService: StudentServiceService, private toastr: ToastrService, private router: Router) {
    this.classForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  ngOnInit(): void {
    this.getListClass();
  }


  getListClass() {
    this.studentService.getListClass().then(
      (data: any) => {
        console.log("data:");
        console.log(data);
        this.listQuiz = data.body;
        console.log(this.listQuiz);
      }
    ).catch(
      error => console.log(error.error.message)
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

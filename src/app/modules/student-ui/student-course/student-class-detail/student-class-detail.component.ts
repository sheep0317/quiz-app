import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentServiceService } from 'src/app/service/student-service.service';
import { TeacherServiceService } from 'src/app/service/teacher-service.service';

@Component({
  selector: 'app-student-class-detail',
  templateUrl: './student-class-detail.component.html',
  styleUrls: ['./student-class-detail.component.css']
})
export class StudentClassDetailComponent implements OnInit {

  classId: string = "";
  toggle: boolean = true; // true thì danh sách bài kiểm tra, false thì danh sách học sinh
  classDetail: any;
  listStudent: any;
  sectionForm: FormGroup;

  constructor(private route: ActivatedRoute, private studentService: StudentServiceService, private router: Router, private toastr: ToastrService) {
    this.sectionForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  ngOnInit(): void {
    this.classId = this.route.snapshot.paramMap.get("classId") as string;
    console.log(this.classId);
    this.getClassDetail();
  }

  getClassDetail() {
    this.studentService.getClassDetail(this.classId).then(
      (data: any) => {
        this.classDetail = data.body;
        console.log(this.classDetail)
      }
    ).catch(
      er =>{
        console.log(er)
        this.router.navigate(['/student']);
      } 
    )
  }

  toggleChild(value: boolean) {
    this.toggle = value;
  }



  showToastr(success: boolean, message: any) {
    if (success) {
      this.toastr.success(message, "", {
        timeOut: 3000,
        progressBar: true
      })
    }
    else {
      this.toastr.error(message, "", {
        timeOut: 3000,
        progressBar: true
      })
    }
  }

}

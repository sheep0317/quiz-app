import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Test } from 'src/app/models/test.model';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-student-test-management',
  templateUrl: './student-test-management.component.html',
  styleUrls: ['./student-test-management.component.css']
})
export class StudentTestManagementComponent implements OnInit {

  test: Test = {
    id: '',
    name: '',
    time: 0,
    numbRetry: 0,
    quizs: []
  };

  scores:any;

  testId:string = "";

  constructor(private toastr: ToastrService, private studentService:StudentServiceService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.testId =  this.route.snapshot.paramMap.get("testId") as string;
    this.studentService.getTest(this.testId).then(
      (data:any)=>{
        console.log(data)
        this.test = data.body
      }
    ).catch(
      er=>{
        console.log(er)
      }
    )
    this.studentService.getTestScores(this.testId).then(
      (data:any)=>{
        console.log(data);
        this.scores = data.body
      }
    ).catch(
      er=>{
        console.log(er)
      }
    )
  }

  startDoQuiz(){
      this.router.navigate(["/student/doquiz/"+this.testId]);
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

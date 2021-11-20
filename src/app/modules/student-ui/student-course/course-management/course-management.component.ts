import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {

  constructor(private studentService:StudentServiceService) { }

  ngOnInit(): void {
    this.studentService.getListClass().subscribe(
      data=>{
        console.log(data);
      }
      ,err=>{
        console.log(err);
      }
    )
  }

  doQuiz(){
    //success => change color
    var isDoneQuiz= document.getElementById("isDoneQuiz");
    if (isDoneQuiz?.classList.contains('done')){
      isDoneQuiz.classList.add('undone');
      isDoneQuiz.classList.remove('done');
    }else{
      isDoneQuiz?.classList.add('done');
      isDoneQuiz?.classList.remove('undone');
    }
  }
}

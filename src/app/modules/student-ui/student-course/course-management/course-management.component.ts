import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

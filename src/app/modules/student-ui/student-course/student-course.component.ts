import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.css']
})
export class StudentCourseComponent implements OnInit {

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

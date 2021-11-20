import { Component, OnInit } from '@angular/core';
import { AnswerT } from 'src/app/models/answerT.model';
import { Quiz } from 'src/app/models/quiz.model';
import { Test } from 'src/app/models/test.model';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {
  
  public isChecked = false;
  constructor() { }
  
  ngOnInit(): void {
  }
  Tests:Test[] = [];
  isCheckboxChecked(event : any, quizid: any){
    this.isChecked = event.target.checked;
  }
  addTest(name: string, numberRetry: any, time:any ): void {
    var test:Test = {
      name: name,
      numberRetry: numberRetry,
      time: time,
      _id: this.getTestID().toString(),
      quizs: []
    }
    this.Tests.push(test);
  }
  addQuiz(content: any, testid:any ): void {
    var quiz:Quiz = {
      content: content,
      quizType: false,
      answers: [],
      id: this.getQuizID(testid).toString(),
    }
    this.Tests.forEach(element => {
      if(element._id == testid){
        element.quizs.push(quiz);
      }
    });
  }
  addAnswer(content: any, testid: any, quizid: any){
    console.log(content, testid, quizid);
    var answer: AnswerT = {
      content: content,
      isCorrect: this.isChecked,
      id: this.getAnswerID(testid, quizid).toString(),
    }
    
    this.Tests.forEach(element => {
      if(element._id == testid){
        element.quizs.forEach(e => {
          if(e.id == quizid){
            e.answers.push(answer);
          }
        });
      }
    });
  }
  getTestID(){
    return this.Tests.length;
  }
 getQuizID(testid: any){
   return this.Tests[testid].quizs.length;
 }
  getAnswerID(testid: any, quizid: any){
    return this.Tests[testid].quizs[quizid].answers.length;
  }
  check(){
    console.log(this.Tests);
  }
}



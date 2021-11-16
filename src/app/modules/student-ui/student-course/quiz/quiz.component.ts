import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { TheAnswer } from 'src/app/models/theAnswer.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private http: HttpClient) { }
  quizSample: Test = {
    _id: '1',
    name: 'Quiz 1',
    time: 10,
    numberRetry: 1,
    quizs: [
      {
        id: '1',
        content: 'Câu 1',
        quizType: false,
        answers: [
          {
            id: '11',
            content: 'Đáp án 1',
          },
          {
            id: '12',
            content: 'Đáp án 2',
          },
          {
            id: '13',
            content: 'Đáp án 3',
          },
          {
            id: '14',
            content: 'Đáp án 4',
          }
        ]
      },
      {
        id: '2',
        content: 'Câu 2',
        quizType: true,
        answers: [
          {
            id: '21',
            content: 'Đáp án 1',
          },
          {
            id: '22',
            content: 'Đáp án 2',
          },
          {
            id: '23',
            content: 'Đáp án 3',
          },
          {
            id: '24',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It 
            has survived not only five centuries, but also the leap into electronic typesetting, remaining ess
            entially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
             Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          }
        ]
      }
    ]

   
  };
  arrayOfTheAnswer: TheAnswer[] = [];
  ngOnInit(): void {
  }
  onItemChange(answerValue: any, quizId: any, quizType: any){
    if(this.arrayOfTheAnswer.findIndex(x => x.idOfQuiz === quizId) === -1){
      this.arrayOfTheAnswer.push(this.addSingle(quizId, answerValue));
    
    }
    else{
      let index = this.arrayOfTheAnswer.findIndex(x => x.idOfQuiz === quizId);
      if(quizType){
        if(this.arrayOfTheAnswer[index].answer.findIndex(x => x === answerValue) === -1){
          this.arrayOfTheAnswer[index].answer.push(answerValue);
        }else{
          let indexOfAnswer = this.arrayOfTheAnswer[index].answer.findIndex(x => x === answerValue);
          this.arrayOfTheAnswer[index].answer.splice(indexOfAnswer, 1);
        }
        
      }
      else{
        this.arrayOfTheAnswer[index].answer = [answerValue];
      }
    }
    console.log(this.arrayOfTheAnswer);
}
  addSingle(quizId: any, answerValue: any){
    let theAnswer: TheAnswer = {
      answer: [answerValue],
      idOfQuiz: quizId,
    }
    return theAnswer;
  }
  status: boolean = false;
  checkToCheckbox(id:any){
    var element = document.getElementById('dapan'+id);
    element?.click();
  }
  onSubmit(){
    console.log(this.arrayOfTheAnswer);
  }
}

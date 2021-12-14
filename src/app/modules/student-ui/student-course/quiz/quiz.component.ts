import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { TheAnswer } from 'src/app/models/theAnswer.model';
import { HttpClient } from '@angular/common/http';
import { StudentServiceService } from 'src/app/service/student-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private studentService:StudentServiceService, private route:ActivatedRoute) { }
  quizSample:Test = {
    id: '',
    name: '',
    time: 0,
    numbRetry: 0,
    quizs: []
  };

  testId:string=""

  arrayOfTheAnswer: TheAnswer[] = [];

  ngOnInit(): void {
    this.testId =  this.route.snapshot.paramMap.get("testId") as string;
    this.studentService.startDoTest(this.testId).then(
      (data:any)=>{
        console.log(data)
      }
    ).catch(
      er=>{
        console.log(er)
      }
    )
  }
//   onItemChange(answerValue: any, quizId: any, quizType: any){
//     if(this.arrayOfTheAnswer.findIndex(x => x.idOfQuiz === quizId) === -1){
//       this.arrayOfTheAnswer.push(this.addSingle(quizId, answerValue));
    
//     }
//     else{
//       let index = this.arrayOfTheAnswer.findIndex(x => x.idOfQuiz === quizId);
//       if(quizType){
//         if(this.arrayOfTheAnswer[index].answer.findIndex(x => x === answerValue) === -1){
//           this.arrayOfTheAnswer[index].answer.push(answerValue);
//         }else{
//           let indexOfAnswer = this.arrayOfTheAnswer[index].answer.findIndex(x => x === answerValue);
//           this.arrayOfTheAnswer[index].answer.splice(indexOfAnswer, 1);
//         }
        
//       }
//       else{
//         this.arrayOfTheAnswer[index].answer = [answerValue];
//       }
//     }
//     console.log(this.arrayOfTheAnswer);
// }
//   addSingle(quizId: any, answerValue: any){
//     let theAnswer: TheAnswer = {
//       answer: [answerValue],
//       idOfQuiz: quizId,
//     }
//     return theAnswer;
//   }
//   status: boolean = false;
//   checkToCheckbox(id:any){
//     var element = document.getElementById('dapan'+id);
//     element?.click();
//   }
//   onSubmit(){
//     console.log(this.arrayOfTheAnswer);
//   }
}

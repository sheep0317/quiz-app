import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Quiz } from 'src/app/models/quiz.model';
import { Test } from 'src/app/models/test.model';
import { TheAnswer } from 'src/app/models/theAnswer.model';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-student-doquiz',
  templateUrl: './student-doquiz.component.html',
  styleUrls: ['./student-doquiz.component.css']
})
export class StudentDoquizComponent implements OnInit {

  listChar: String[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

  test: Test = {
    name: '',
    time: 0,
    numbRetry: 0,
    quizs: []
  };

  arrayOfTheAnswer: TheAnswer[] = []

  p: number = 1;
  errormsg: String = "ERROR";
  isErr: Boolean = false;
  testId:string = ""

  constructor(private studentService:StudentServiceService,private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    this.testId =  this.route.snapshot.paramMap.get("testId") as string;
    this.studentService.startDoTest(this.testId).then(
      (data:any)=>{
        console.log(data)
        this.test = data.body
        this.createArrayOfAnswer();
      }
    ).catch(
      er=>{
        console.log(er)
        this.showToastr(false,er.error)
        this.router.navigate(["/student/test/"+this.testId])
      }
    )

    
  }
  createArrayOfAnswer() {
    this.test.quizs.forEach((quiz, index) => {
      this.arrayOfTheAnswer.push(this.initAnswer(quiz.id));
    });

    
  }

  checkExistInArrayAnswer(quizIndex:any, answerId:any):boolean{
    return this.arrayOfTheAnswer[quizIndex].answers.findIndex(x=>x.id === answerId) !== -1;
  }

  quizPush() {
    this.test.quizs.push({
      id:this.test.quizs.length.toString(),
      content: '1232312323',
      quizType: false,
      answers: [{
        id: "1",
        answer: '1321312323',
        correct: true,
      }, {
        id: "2",
        answer: '123123213123',
        correct: false,
      }, {
        id: "3",
        answer: '12312312321312',
        correct: false,
      }, {
        id: "4",
        answer: '12323132',
        correct: false,
      }]
    })
  }

  onItemChange(quizType: Boolean, quizId: any, answerId: any,) {
    let index = this.arrayOfTheAnswer.findIndex(x => x.id === quizId);

    if (index === -1) {
      this.arrayOfTheAnswer.push(this.addSingle(quizId, answerId));
    }
    else if (quizType) {
      if (this.arrayOfTheAnswer[index].answers.findIndex(x => x.id === answerId) === -1) {
        this.arrayOfTheAnswer[index].answers.push({id:answerId,answer:'',correct:true});
      } else {
        let indexOfAnswer = this.arrayOfTheAnswer[index].answers.findIndex(x => x.id === answerId);
        this.arrayOfTheAnswer[index].answers.splice(indexOfAnswer, 1);
      }
    } else {
      this.arrayOfTheAnswer[index].answers = [{id:answerId,answer:'',correct:true}];
    }
  }
  addSingle(quizId: any, answerId: any): TheAnswer {
    let answer: TheAnswer = {
      id: quizId,
      answers: [
        {id:answerId,answer:'',correct:true}
      ]
    }
    return answer
  }

  initAnswer(quizId:any): TheAnswer{
    let answer: TheAnswer = {
      id: quizId,
      answers: []
    }
    return answer
  }

  submit(){
    console.log(this.arrayOfTheAnswer)
    this.studentService.submitTest(this.arrayOfTheAnswer,this.testId).then(
      (data:any)=>{
        console.log(data)
        this.showToastr(true,data.body)
        this.router.navigate(["/student/test/"+this.testId])
      }
    ).catch(
      er=>{
        console.log(er)
        this.showToastr(false,er.error.message)
      }
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




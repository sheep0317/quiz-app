import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ToastrService } from 'ngx-toastr';
import { TeacherServiceService } from 'src/app/service/teacher-service.service';
import { AnswerT } from '../../../../models/answerT.model';
import { Quiz } from '../../../../models/quiz.model';
import { Test } from '../../../../models/test.model';

@Component({
  selector: 'app-test-management',
  templateUrl: './test-management.component.html',
  styleUrls: ['./test-management.component.css']
})
export class TestManagementComponent implements OnInit {

  listChar: String[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

  //Biến cho chart
  lineChartData: ChartDataSets[] = [
    { data: [3,5,1,2,7,2,1,3,5,6,0], label: 'Series A' },
  ];
  lineChartLabels: Label[] = ['0', '1', '2', '3', '4', '5', '6','7','8','9','10'];
  //
  test: Test = {
    id: '',
    name: '',
    time: 0,
    numbRetry: 0,
    quizs: []
  };
  p: number = 1;
  errormsg: String = "ERROR";
  isErr: Boolean = false;
  testId:string = "";
  toggleShow:boolean = true;

  constructor(private toastr: ToastrService, private teacherService: TeacherServiceService, private route:ActivatedRoute) {
    this.quizPush();
  }

  ngOnInit(): void {
    this.testId =  this.route.snapshot.paramMap.get("testId") as string;
    this.teacherService.getTest(this.testId).then(
      (data:any)=>{
        this.test = data as Test;
        console.log(data);
      }
    ).catch(
      er=>{
        console.log(er);
      }
    )
  }

  onItemChange(quizType: Boolean, quizIndex: any, answerIndex: any,) {
    if (quizType) {
      this.test.quizs[quizIndex].answers.forEach((element, index) => {
        if (index == answerIndex) {
          this.test.quizs[quizIndex].answers[index].correct = !this.test.quizs[quizIndex].answers[index].correct;
        }

      });
    }
    else {
      this.test.quizs[quizIndex].answers.forEach((element, index) => {
        if (index == answerIndex) {
          this.test.quizs[quizIndex].answers[index].correct = true;
        }
        else {
          this.test.quizs[quizIndex].answers[index].correct = false;
        }
      });
    }
  }
  quizPush() {
    this.test.quizs.push({
      id: '',
      content: '',
      quizType: false,
      answers: [{
        answer: '',
        correct: true,
        id: '',
      }, {
        answer: '',
        correct: false,
        id: '',
      }, {
        answer: '',
        correct: false,
        id: '',
      }, {
        answer: '',
        correct: false,
        id: '',
      }]
    })
  }

  deleteQuiz(index: any) {
    if (this.test.quizs.length <= 1) {
      this.showToastr(false, "Bài kiểm tra không thể không có quiz nào!")
    }
    else {
      this.test.quizs.splice(index, 1);
      this.p = 1;
    }

  }

  onCreateNewTest() {
    this.isErr = !this.validateTest(this.test);

    if (!this.isErr) {
      console.log(this.test);
    }
  }

  validateTest(test: Test): Boolean {
    this.errormsg = "ERROR"
    let passValidate: Boolean = true;
    if (test.name == '') {
      this.errormsg += "<br>Tên bài kiểm tra không được để trống"
      passValidate = false
    }
    if (test.numbRetry < 1) {
      this.errormsg += "<br>Số lần làm bài kiểm tra không được nhỏ hơn 1"
      passValidate = false
    }
    if (test.time < 5) {
      this.errormsg += "<br>Thời gian làm không được nhỏ hơn 5 phút"
      passValidate = false
    }
    let listNonPassQuiz: Number[] = [];
    test.quizs.forEach((quiz, i) => {
      let passQuizVali: Boolean = true;
      if (quiz.content == "") {
        passQuizVali = false;
      }
      quiz.answers.forEach(answer => {
        if (answer.answer == "")
          passQuizVali = false;
      });
      if (!passQuizVali)
        listNonPassQuiz.push(i + 1);
    });
    if (listNonPassQuiz.length > 0) {
      passValidate = false;
      this.errormsg += "<br>Quiz " + listNonPassQuiz.toString() + " không hợp lệ";
    }

    return passValidate;
  }


  toggle(value:boolean){
    this.toggleShow = value;
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

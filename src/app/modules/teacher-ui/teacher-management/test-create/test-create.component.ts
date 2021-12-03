import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {

  listChar: String[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

  test: Test = {
    _id: '',
    name: '',
    time: 0,
    numbRetry: 0,
    quizs: []
  };
  p: number = 1;
  errormsg: String = "ERROR";
  isErr: Boolean = false;

  constructor(private toastr: ToastrService) {
    this.quizPush();
  }

  ngOnInit(): void {

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

    if(!this.isErr)
    {
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
        listNonPassQuiz.push(i+1);
    });
    if(listNonPassQuiz.length>0)
    {
      passValidate = false;
      this.errormsg += "<br>Quiz "+listNonPassQuiz.toString() +" không hợp lệ";
    }

    return passValidate;
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



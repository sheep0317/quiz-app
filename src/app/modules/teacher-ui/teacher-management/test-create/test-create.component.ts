import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherServiceService } from 'src/app/service/teacher-service.service';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {

  listChar: String[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']

  test: Test = {
    name: '',
    time: 0,
    numbRetry: 0,
    quizs: []
  };
  p: number = 1;
  errormsg: String = "ERROR";
  isErr: Boolean = false;
  sectionId: string = "";

  constructor(private teacherService:TeacherServiceService,private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {
    this.quizPush();
  }

  ngOnInit(): void {
    this.sectionId =  this.route.snapshot.paramMap.get("section") as string;
    console.log(this.sectionId);
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
      content: '',
      quizType: false,
      answers: [{
        answer: '',
        correct: true,
      }, {
        answer: '',
        correct: false,
      }, {
        answer: '',
        correct: false,
      }, {
        answer: '',
        correct: false,
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
      this.teacherService.createNewTest(this.test, this.sectionId).then(
        (data:any)=>{
          this.router.navigate(["/teacher/course"]);
          this.showToastr(true, data)
        }
      ).catch(
        er=>{
          this.showToastr(false, er)
        }
      )
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
        timeOut: 3000,
        progressBar: true
      })
    }
    else {
      this.toastr.error(message, "", {
        timeOut: 3000,
        progressBar: true
      })
    }
  }
}



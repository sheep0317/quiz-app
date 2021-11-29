import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnswerT } from 'src/app/models/answerT.model';
import { Quiz } from 'src/app/models/quiz.model';
import { Test } from 'src/app/models/test.model';


@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {


  test: Test = {
    _id: '',
    name: '',
    time: 0,
    numberRetry: 0,
    quizs: []
  };

  constructor() {
    this.test.quizs.push({
      id: '',
      content: '',
      quizType: false,
      answers: [{
        content: '',
        isCorrect: true,
        id: '',
      }, {
        content: '',
        isCorrect: false,
        id: '',
      }, {
        content: '',
        isCorrect: false,
        id: '',
      }, {
        content: '',
        isCorrect: false,
        id: '',
      }]
    })
    this.test.quizs.push({
      id: '',
      content: '',
      quizType: false,
      answers: [{
        content: '',
        isCorrect: true,
        id: '',
      }, {
        content: '',
        isCorrect: false,
        id: '',
      }, {
        content: '',
        isCorrect: false,
        id: '',
      }, {
        content: '',
        isCorrect: false,
        id: '',
      }]
    })
  }

  ngOnInit(): void {

  }

  onItemChange(quizType: Boolean, quizIndex: any, answerIndex: any,) {
    if (quizType) {
      this.test.quizs[quizIndex].answers.forEach((element, index) => {
        console.log("\nindex" + index);
        console.log(" answerIndex" + answerIndex);
        if (index == answerIndex) {
          this.test.quizs[quizIndex].answers[index].isCorrect = !this.test.quizs[quizIndex].answers[index].isCorrect;
        }
        console.log("element " + this.test.quizs[quizIndex].answers[index].isCorrect);

      });
    }
    else {
      this.test.quizs[quizIndex].answers.forEach((element, index) => {
        console.log("\nindex" + index);
        console.log(" answerIndex" + answerIndex);
        if (index == answerIndex) {
          this.test.quizs[quizIndex].answers[index].isCorrect = true;
        }
        else {
          this.test.quizs[quizIndex].answers[index].isCorrect = false;
        }
        console.log("element " + this.test.quizs[quizIndex].answers[index].isCorrect);
      });
    }
  }

}



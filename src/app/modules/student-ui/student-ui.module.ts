import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentUiRoutingModule } from './student-ui-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@NgModule({
  declarations: [
    QuizComponent,
    StudentCourseComponent,
    StudentProfileComponent,
  ],
  imports: [
    CommonModule,
    StudentUiRoutingModule
  ]
})
export class StudentUiModule { }

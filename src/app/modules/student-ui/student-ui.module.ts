import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentUiRoutingModule } from './student-ui-routing.module';
import { QuizComponent } from './student-course/quiz/quiz.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentClassDetailComponent } from './student-course/student-class-detail/student-class-detail.component';
import { UiComponentModule } from '../ui-component/ui-component.module';

@NgModule({
  declarations: [
    QuizComponent,
    StudentCourseComponent,
    StudentProfileComponent,
    StudentClassDetailComponent
  ],
  imports: [
    CommonModule,
    StudentUiRoutingModule,
    UiComponentModule
  ]
})
export class StudentUiModule { }

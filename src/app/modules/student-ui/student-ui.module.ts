import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentUiRoutingModule } from './student-ui-routing.module';
import { QuizComponent } from './student-course/quiz/quiz.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { CourseManagementComponent } from './student-course/course-management/course-management.component';

@NgModule({
  declarations: [
    QuizComponent,
    StudentCourseComponent,
    StudentProfileComponent,
    CourseManagementComponent,
  ],
  imports: [
    CommonModule,
    StudentUiRoutingModule
  ]
})
export class StudentUiModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseManagementComponent } from './student-course/course-management/course-management.component';
import { QuizComponent } from './student-course/quiz/quiz.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentUiComponent } from './student-ui.component';

const routes: Routes = [
  {
    path:'student',
    component:StudentUiComponent,
    children:[
      {
        path:'',
        component: StudentProfileComponent
      },
      {
        path:'course',
        component: StudentCourseComponent,
        children:[
          {
            path:'',
            component: CourseManagementComponent
          },
          {
            path:'courseid_quiz',
            component: QuizComponent
          }
        ]
      },
      {
        path:'profile',
        component:StudentProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentUiRoutingModule { }

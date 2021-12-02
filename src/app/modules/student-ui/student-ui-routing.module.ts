import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../public/pagenotfound/pagenotfound.component';
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
            component: StudentCourseComponent
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
  },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   component: PagenotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentUiRoutingModule { }

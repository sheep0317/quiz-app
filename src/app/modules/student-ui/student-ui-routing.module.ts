import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        component: StudentCourseComponent
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

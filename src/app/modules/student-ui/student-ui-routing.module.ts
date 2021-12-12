import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../public/pagenotfound/pagenotfound.component';
import { CourseManagementComponent } from './student-course/course-management/course-management.component';
import { StudentClassDetailComponent } from './student-course/student-class-detail/student-class-detail.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentUiComponent } from './student-ui.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentUiComponent,
    data: { breadcrumb: 'Student' },
    children: [
      {
        path: '',
        component: StudentProfileComponent,
      },
      {
        path: 'course',
        component: StudentCourseComponent,
        data: { breadcrumb: 'Course' },
        children: [
          {
            path: '',
            component: CourseManagementComponent
          },
          {
            path: ':classId',
            component: StudentClassDetailComponent,
            data: { breadcrumb: 'Detail' }
          },
        ],
      },
      {
        path: 'profile',
        component: StudentProfileComponent,
        data: { breadcrumb: 'Profile' }
      }
    ],

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

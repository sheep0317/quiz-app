import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseManagementComponent } from './student-course/course-management/course-management.component';
import { StudentClassDetailComponent } from './student-course/student-class-detail/student-class-detail.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentDoquizComponent } from './student-course/student-doquiz/student-doquiz.component';
import { StudentTestManagementComponent } from './student-course/student-test-management/student-test-management.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentUiComponent } from './student-ui.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentUiComponent,
    data: { breadcrumb: 'Trang chủ' },
    children: [
      {
        path: '',
        component: StudentProfileComponent,
      },
      {
        path: 'course',
        component: StudentCourseComponent,
        data: { breadcrumb: 'Danh sách lớp' },
        children: [
          {
            path: '',
            component: CourseManagementComponent
          },
          {
            path: ':classId',
            component: StudentClassDetailComponent,
            data: { breadcrumb: 'Lớp' }
          },
        ],
      },
      {
        path: 'profile',
        component: StudentProfileComponent,
        data: { breadcrumb: 'Hồ sơ' }
      },
      {
        path:'test/:testId',
        component: StudentTestManagementComponent,
        data: { breadcrumb: 'Bài kiểm tra'}
      },
      {
        path:'doquiz/:testId',
        component: StudentDoquizComponent,
        data: { breadcrumb: 'Làm bài kiểm tra'}
      },
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../public/pagenotfound/pagenotfound.component';
import { ClassDetailComponent } from './teacher-management/class-detail/class-detail.component';
import { StudentListComponent } from './teacher-management/class-detail/student-list/student-list.component';
import { TestListComponent } from './teacher-management/class-detail/test-list/test-list.component';
import { ClassManagementComponent } from './teacher-management/class-management/class-management.component';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { TestCreateComponent } from './teacher-management/test-create/test-create.component';
import { TestManagementComponent } from './teacher-management/test-management/test-management.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TeacherUiComponent } from './teacher-ui.component';

const routes: Routes = [
  {
    path:'teacher',
    component:TeacherUiComponent,
    data: { breadcrumb: 'Trang chủ'},
    children:[
      {
        path:'',
        component: TeacherProfileComponent
      },
      {
        path:'course',
        component: TeacherManagementComponent,
        data: { breadcrumb: 'Danh sách lớp học'},
        children:[
          {
            path:'',
            component: ClassManagementComponent
          },
          {
          
            path:':section/create_test',
            component: TestCreateComponent,
            data: { breadcrumb: 'Tạo bài kiểm tra'}
          },
          {
            path: ':classId',
            component: ClassDetailComponent,
            data: { breadcrumb: 'Lớp học'}
          }
        ]
      },
      {
        path:'profile',
        component:TeacherProfileComponent,
        data: { breadcrumb: 'Hồ sơ'}
      },
      {
        path:'test/:testId',
        component: TestManagementComponent,
        data: { breadcrumb: 'Bài kiểm tra'}
      },
      
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
export class TeacherUiRoutingModule { }

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
    data: { breadcrumb: 'Teacher'},
    children:[
      {
        path:'',
        component: TeacherProfileComponent
      },
      {
        path:'course',
        component: TeacherManagementComponent,
        data: { breadcrumb: 'Course'},
        children:[
          {
            path:'',
            component: ClassManagementComponent
          },
          {
          
            path:'create_test',
            component: TestCreateComponent,
            data: { breadcrumb: 'Create Test'}
          },
          {
            path: ':classId',
            component: ClassDetailComponent,
            children:[
              {
                path: '',
                component: TestListComponent
              },
              {
                path: 'student-list',
                component: StudentListComponent,
              },
              {
                path: 'test-list',
                component: TestListComponent,
              }

            ],
            data: { breadcrumb: 'Detail'}
          }
        ]
      },
      {
        path:'profile',
        component:TeacherProfileComponent,
        data: { breadcrumb: 'Profile'}
      },
      {
        path:'test/:testId',
        component: TestManagementComponent,
        data: { breadcrumb: 'Test'}
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

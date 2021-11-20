import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassDetailComponent } from './teacher-management/class-detail/class-detail.component';
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
    children:[
      {
        path:'',
        component: TeacherProfileComponent
      },
      {
        path:'manage',
        component: TeacherManagementComponent,
        children:[
          {
            path:'',
            component: ClassManagementComponent
          },
          {
            path:'classid_testeditor',
            component: TestManagementComponent
          },
          {
            path:'create_test',
            component: TestCreateComponent
          },
          {
            path: 'class',
            component: ClassDetailComponent
          }
        ]
      },
      {
        path:'profile',
        component:TeacherProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherUiRoutingModule { }

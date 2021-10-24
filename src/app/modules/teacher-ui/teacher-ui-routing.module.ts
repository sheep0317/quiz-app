import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
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
        component: TeacherManagementComponent
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

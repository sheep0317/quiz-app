import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherUiRoutingModule } from './teacher-ui-routing.module';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';


@NgModule({
  declarations: [
    TeacherManagementComponent,
    TeacherProfileComponent
  ],
  imports: [
    CommonModule,
    TeacherUiRoutingModule
  ]
})
export class TeacherUiModule {}

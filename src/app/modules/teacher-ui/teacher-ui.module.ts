import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherUiRoutingModule } from './teacher-ui-routing.module';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TestManagementComponent } from './teacher-management/test-management/test-management.component';
import { ClassManagementComponent } from './teacher-management/class-management/class-management.component';


@NgModule({
  declarations: [
    TeacherManagementComponent,
    TeacherProfileComponent,
    TestManagementComponent,
    ClassManagementComponent
  ],
  imports: [
    CommonModule,
    TeacherUiRoutingModule
  ]
})
export class TeacherUiModule {}

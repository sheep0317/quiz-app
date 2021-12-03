import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherUiRoutingModule } from './teacher-ui-routing.module';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { TestManagementComponent } from './teacher-management/test-management/test-management.component';
import { ClassManagementComponent } from './teacher-management/class-management/class-management.component';
import { TestCreateComponent } from './teacher-management/test-create/test-create.component';
import { ClassDetailComponent } from './teacher-management/class-detail/class-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { StudentListComponent } from './teacher-management/class-detail/student-list/student-list.component';
import { TestListComponent } from './teacher-management/class-detail/test-list/test-list.component';


@NgModule({
  declarations: [
    TeacherManagementComponent,
    TeacherProfileComponent,
    TestManagementComponent,
    ClassManagementComponent,
    TestCreateComponent,
    ClassDetailComponent,
    StudentListComponent,
    TestListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TeacherUiRoutingModule,
    NgxPaginationModule,
    TextareaAutosizeModule
  ]
})
export class TeacherUiModule {}

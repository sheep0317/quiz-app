import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentUiRoutingModule } from './student-ui-routing.module';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentClassDetailComponent } from './student-course/student-class-detail/student-class-detail.component';
import { UiComponentModule } from '../ui-component/ui-component.module';
import { StudentTestListComponent } from './student-course/student-class-detail/student-test-list/student-test-list.component';
import { StudentStudentListComponent } from './student-course/student-class-detail/student-student-list/student-student-list.component';
import { CourseManagementComponent } from './student-course/course-management/course-management.component';
import { StudentTestManagementComponent } from './student-course/student-test-management/student-test-management.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentDoquizComponent } from './student-course/student-doquiz/student-doquiz.component';

@NgModule({
  declarations: [
    StudentCourseComponent,
    StudentProfileComponent,
    StudentClassDetailComponent,
    StudentTestListComponent,
    StudentStudentListComponent,
    CourseManagementComponent,
    StudentTestManagementComponent,
    StudentDoquizComponent
  ],
  imports: [
    CommonModule,
    StudentUiRoutingModule,
    UiComponentModule,
    TextareaAutosizeModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
  ]
})
export class StudentUiModule { }

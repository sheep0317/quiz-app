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

@NgModule({
  declarations: [
    StudentCourseComponent,
    StudentProfileComponent,
    StudentClassDetailComponent,
    StudentTestListComponent,
    StudentStudentListComponent,
    CourseManagementComponent
  ],
  imports: [
    CommonModule,
    StudentUiRoutingModule,
    UiComponentModule
  ]
})
export class StudentUiModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentUiComponent } from './modules/student-ui/student-ui.component';
import { TeacherUiComponent } from './modules/teacher-ui/teacher-ui.component';
import { HomepageComponent } from './modules/public/homepage/homepage.component';
import { LoginComponent } from './modules/public/login/login.component';
import { SigninComponent } from './modules/public/signin/signin.component';
import { StudentUiModule } from './modules/student-ui/student-ui.module';
import { TeacherUiModule } from './modules/teacher-ui/teacher-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentUiComponent,
    TeacherUiComponent,
    HomepageComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentUiModule,
    TeacherUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

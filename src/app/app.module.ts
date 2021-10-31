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
import { DashboardComponent } from './modules/ui-component/dashboard/dashboard.component';
import { MenuComponent } from './modules/ui-component/menu/menu.component';
import { ClassItemComponent } from './modules/ui-component/class-item/class-item.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    StudentUiComponent,
    TeacherUiComponent,
    HomepageComponent,
    LoginComponent,
    SigninComponent,
    DashboardComponent,
    MenuComponent,
    ClassItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentUiModule,
    TeacherUiModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentUiComponent } from './modules/student-ui/student-ui.component';
import { TeacherUiComponent } from './modules/teacher-ui/teacher-ui.component';
import { HomepageComponent } from './modules/public/homepage/homepage.component';
import { LoginComponent } from './modules/public/login/login.component';
import { SignUpComponent } from './modules/public/signup/signup.component';
import { StudentUiModule } from './modules/student-ui/student-ui.module';
import { TeacherUiModule } from './modules/teacher-ui/teacher-ui.module';
import { DashboardComponent } from './modules/ui-component/dashboard/dashboard.component';
import { MenuComponent } from './modules/ui-component/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {BreadcrumbModule} from 'angular-crumbs';

import { AboutComponent } from './modules/public/about/about.component';
import { HeaderComponent } from './modules/public/header/header.component';
import { FooterComponent } from './modules/public/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ClassItemComponent } from './modules/ui-component/class-item/class-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentUiComponent,
    TeacherUiComponent,
    HomepageComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    MenuComponent,
    ClassItemComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentUiModule,
    TeacherUiModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BreadcrumbModule
  ],
  providers: [
    CookieService,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

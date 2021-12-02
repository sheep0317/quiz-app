import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/public/about/about.component';
import { HomepageComponent } from './modules/public/homepage/homepage.component';
import { PagenotfoundComponent } from './modules/public/pagenotfound/pagenotfound.component';
import { StudentUiRoutingModule } from './modules/student-ui/student-ui-routing.module';
import { TeacherUiRoutingModule } from './modules/teacher-ui/teacher-ui-routing.module';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  }, 
  {
    path:'home',
    component:HomepageComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'Home'}
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'About'}
  }, 
  {
    path:'student',
    redirectTo: '/student',
    pathMatch: 'full',
    data: { breadcrumb: 'Student'}
  },
  {
    path:'teacher',
    redirectTo: '/teacher',
    pathMatch: 'full',
    data: { breadcrumb: 'Teacher'}
  },
  {
    path: '**',
    redirectTo: '/404',
  },
  {
    path: '404',
    component: PagenotfoundComponent,
  }
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    TeacherUiRoutingModule,
    StudentUiRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

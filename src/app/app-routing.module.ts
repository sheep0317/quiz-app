import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/public/about/about.component';
import { HomepageComponent } from './modules/public/homepage/homepage.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

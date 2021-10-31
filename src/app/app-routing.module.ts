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
    pathMatch: 'full'
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch: 'full'
  }, 
  {
    path:'student',
    redirectTo: '/student',
    pathMatch: 'full'
  },
  {
    path:'teacher',
    redirectTo: '/teacher',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

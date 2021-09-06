import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
  {
    path : 'accessdenied',
    component : AccessDeniedComponent
  },
  {
    path: 'sub1',
    component: DashboardComponent
  },
  {
    path: 'sub2',
    component: DashboardComponent
  },
  {
    path: 'sub3',
    component: DashboardComponent
  },
  {
    path: 'sub4',
    component: DashboardComponent
  },
  {
    path: 'main2',
    component: DashboardComponent
  },
  {
    path: 'main4',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

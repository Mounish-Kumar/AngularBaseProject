import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'sub1',
    component: DashboardComponent
  },
  {
    path: 'sub4',
    component: DashboardComponent
  },
  {
    path: 'sub5',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

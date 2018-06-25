import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {MembersComponent} from './members/members.component';
import { AddMembershipComponent } from './add-membership/add-membership.component';

export const AppRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent}, {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'members', pathMatch: 'full'},
      {path: 'dashboard', redirectTo: 'members', pathMatch: 'full'},
      {path: 'addMembership', component: AddMembershipComponent},
      {path: 'members', component: MembersComponent}
    ]
  }
];

@NgModule({
  exports: [RouterModule],

  imports: [RouterModule.forRoot(AppRoutes)]
})

export class AppRoutingModule {
}

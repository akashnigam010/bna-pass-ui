import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {MembersComponent} from './members/members.component';
import {MembershipComponent} from './membership/membership.component';

export const AppRoutes: Routes = [
  {path: 'login', component: LoginComponent}, {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'members', component: MembersComponent},
      {path: 'membership/:id', component: MembershipComponent},
      {path: 'addmember', component: MembershipComponent}
    ]
  }
];

@NgModule({
  exports: [RouterModule],

  imports: [RouterModule.forRoot(AppRoutes)]
})

export class AppRoutingModule {
}

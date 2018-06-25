import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ToastyModule} from 'ng2-toasty';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from './material.module';
import {HttpProvider, WebApiProvider} from './provider';
import {LoginService} from './service/login.service';
import {LayoutModule} from './layout/layout.module';
import { MembersComponent } from './members/members.component';
import { AddMembershipComponent } from './add-membership/add-membership.component';

const providers = [HttpProvider, WebApiProvider];
const services = [LoginService];


@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, MembersComponent, AddMembershipComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, FormsModule,
    ToastyModule.forRoot(), AppRoutingModule, ReactiveFormsModule, LayoutModule,
    MaterialModule, HttpModule, HttpClientModule
  ],
  providers: [...providers, ...services],
  bootstrap: [AppComponent]
})
export class AppModule {
}

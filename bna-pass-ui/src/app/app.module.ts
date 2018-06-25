import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpProvider, WebApiProvider } from './provider';
import { LoginService } from './service/login.service';

const providers = [HttpProvider, WebApiProvider];
const services = [LoginService];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [...providers, ...services],
  bootstrap: [AppComponent]
})
export class AppModule { }

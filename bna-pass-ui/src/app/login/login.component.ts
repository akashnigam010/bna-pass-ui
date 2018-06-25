import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Login } from '../model';
import { Router } from '@angular/router';
import { LoginService } from '../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = null;
  userLogin: Login = {username: '', password: ''};

  @ViewChild('loginCard', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private router: Router, private loginservice: LoginService) {}

  ngOnInit() {
  }

  async loginAsync() {

  }

}

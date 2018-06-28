import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';

import {Login} from '../model';
import {LoginService} from '../service';
import { CONSTANTS } from '../util/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = null;
  userLogin: Login = {id: '', password: ''};

  @ViewChild('loginCard', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private router: Router, private loginservice: LoginService) {}

  ngOnInit() {}

  async loginAsync() {
    // call login service
    const loginResponse =
        await this.loginservice.authenticate(this.userLogin).toPromise();
    if (loginResponse.result) {
      this.router.navigate(['/members']);
      localStorage.setItem(CONSTANTS.USER, JSON.stringify(loginResponse));
      this.errorMessage = null;
    } else {
      this.errorMessage = loginResponse.statusCodes.statusCode[0].description;
    }
  }
}

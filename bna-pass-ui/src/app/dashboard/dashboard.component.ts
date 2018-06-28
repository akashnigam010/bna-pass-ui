import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {CONSTANTS} from '../util/constants';
import { LoginService } from '../service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidebar: any;

  constructor(private router: Router, private loginService: LoginService) {
    const loginResponse = JSON.parse(localStorage.getItem(CONSTANTS.USER));
    if (loginResponse == null) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {}

  logout(): void {
    // this.openSnackBar('You have been logged out', 'Dismiss');
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    if (this.sidebar) {
      this.sidebar.toggle();
    }
  }
}

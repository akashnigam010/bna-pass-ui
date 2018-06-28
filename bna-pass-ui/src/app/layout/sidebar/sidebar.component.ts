import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { CONSTANTS } from '../../util/constants';
import { LoginResponse } from '../../response/login.response';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {
  name: string = null;
  location: string = null;
  navItemsSettings = [
    {
      name: 'All Members',
      route: '/members',
      icon: 'donut_large',
    },
    {
      name: 'Add Member',
      route: '/addmember',
      icon: 'add_circle',
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const loginResponse: LoginResponse = JSON.parse(localStorage.getItem(CONSTANTS.USER));
    this.name = loginResponse.user.name;
    this.location = loginResponse.user.location;
  }
}

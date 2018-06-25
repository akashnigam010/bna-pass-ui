import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {
  navItemsSettings = [
    {
      name: 'Dashboard',
      route: 'dashboard',
      icon: 'donut_large',
    },
    {
      name: 'Add Membership',
      route: 'addMembership',
      icon: 'add_circle',
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
}

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
      name: 'Attribute Type',
      route: 'attributetype',
      icon: 'donut_large',
    },
    {
      name: 'Entity Type',
      route: 'entitytype',
      icon: 'toll',
    },
    {
      name: 'User Settings',
      route: 'usersettings',
      icon: 'settings',
    },
    {
      name: 'Add Entity',
      route: 'addentity',
      icon: 'add_circle',
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
}

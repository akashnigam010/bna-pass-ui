import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidebar: any;

  sectionHeading = 'Section Heading';

  constructor() {}

  ngOnInit() {}

  toggleSidebar() {
    if (this.sidebar) {
      this.sidebar.toggle();
    }
  }
}

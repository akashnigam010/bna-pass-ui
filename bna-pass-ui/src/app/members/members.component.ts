import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PageRequest} from '../model';
import {Membership} from '../response';
import {MembershipService} from '../service';
import { ToastyService, ToastOptions } from 'ng2-toasty';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  errorMessage = '';
  displayedColumns = ['name', 'status', 'startDate', 'endDate'];
  memberships: Membership[] = [];
  pageRequest: PageRequest = {pageNumber: 1, resultsPerPage: 10};

  constructor(
      private router: Router, private membershipService: MembershipService, private toastyService: ToastyService) {}

  async ngOnInit() {
    const membershipsResponse = await this.membershipService.getMemberships(this.pageRequest).toPromise();
    if (membershipsResponse.result) {
      this.memberships = membershipsResponse.memberships;
    } else {
      alert(membershipsResponse.statusCodes.statusCode[0].description);
    }
  }

  goToMember(id: number) {
    this.router.navigate(['/membership', id]);
  }

  addToast(title: string, message: string, isError: boolean) {
    // Or create the instance of ToastOptions
    const toastOptions: ToastOptions = {
      title: title,
      msg: message,
      showClose: true,
      timeout: 3000,
      theme: 'default'
    };

    if (isError) {
      this.toastyService.error(toastOptions);
    } else {
      this.toastyService.success(toastOptions);
    }
  }
}

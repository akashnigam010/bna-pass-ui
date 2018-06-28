import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IdRequest, MembershipRequest} from '../model';
import {Membership} from '../response';
import {MembershipService} from '../service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  isNew = false;
  panelOpenState = false;
  membership: Membership = null;
  idRequest: IdRequest = new IdRequest();

  constructor(
      private router: ActivatedRoute,
      private membershipService: MembershipService) {}

  async ngOnInit() {
    this.idRequest.id = +this.router.snapshot.paramMap.get('id');
    if (this.idRequest.id === 0) {
      this.isNew = true;
      this.membership = {
        id: null,
        member: {
          id: null,
          firstName: null,
          lastName: null,
          phone: null,
          email: null,
          address: null,
          idProof: null,
          imageUrl: null,
          type: 'NEW'
        },
        status: 'ACTIVE',
        description: null,
        startDate: null,
        endDate: null,
        entriesPerDay: 1,
        dayType: 'ALL_DAYS'
      };
    } else {
      const membershipResponse =
          await this.membershipService.getMembership(this.idRequest)
              .toPromise();
      if (membershipResponse.result) {
        this.membership = membershipResponse.membership;
      } else {
        alert(membershipResponse.statusCodes.statusCode[0].description);
      }
    }
  }

  async saveMember() {
    this.membership.member.type = this.isNew ? 'NEW' : 'UPDATE';
    const idResponse = await this.membershipService
                               .createOrUpdateMember(this.membership.member)
                               .toPromise();
    if (idResponse.result) {
      this.membership.member.id = idResponse.id;
      alert('Member Details Saved');
      this.isNew = false;
    } else {
      alert(idResponse.statusCodes.statusCode[0].description);
    }
  }

  async saveMembership() {
    const membershipRequest: MembershipRequest = {
      id: this.membership.id,
      memberId: this.membership.member.id,
      status: this.membership.status,
      description: this.membership.description,
      dayType: this.membership.dayType,
      entriesPerDay: this.membership.entriesPerDay,
      startDate: this.membership.startDate,
      endDate: this.membership.endDate,
      type: this.membership.id == null ? 'NEW' : 'UPDATE'
    };
    const idResponse =
        await this.membershipService.createOrUpdateMembership(membershipRequest)
            .toPromise();
    if (idResponse.result) {
      this.membership.id = idResponse.id;
      alert('Membership Details Saved');
    } else {
      alert(idResponse.statusCodes.statusCode[0].description);
    }
  }
}

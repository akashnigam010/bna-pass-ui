import {Injectable} from '@angular/core';
import {WebApiProvider} from '../provider';
import { IdRequest, PageRequest, MembershipRequest, BlockRequest } from '../model';
import { MembershipResponse, MembershipsResponse, Member, MemberResponse, StatusResponse, IdResponse } from '../response';
import { Observable } from 'rxjs/Observable';
import { URLs } from '../util/urls';
import { CONSTANTS } from '../util/constants';
import { LoginResponse } from '../response/login.response';

@Injectable()
export class MembershipService {
  constructor(private webApiProvider: WebApiProvider) {}

  public getMembership(idRequest: IdRequest): Observable<MembershipResponse> {
    return this.webApiProvider.post<MembershipResponse>(URLs.getMembership, idRequest, true, false, true);
  }

  public getMemberships(pageRequest: PageRequest): Observable<MembershipsResponse> {
    return this.webApiProvider.post<MembershipsResponse>(URLs.getMemberships, pageRequest, true, false, true);
  }

  public createOrUpdateMember(member: Member): Observable<IdResponse> {
    return this.webApiProvider.post<IdResponse>(URLs.createOrUpdateMember, member, true, false, true);
  }

  public createOrUpdateMembership(membership: MembershipRequest): Observable<IdResponse> {
    return this.webApiProvider.post<IdResponse>(URLs.createOrUpdateMembership, membership, true, false, true);
  }

}

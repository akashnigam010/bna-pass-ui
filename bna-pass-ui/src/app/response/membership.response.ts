import {GenericResponse} from './generic.response';
import {Membership} from './membership';

export class MembershipResponse extends GenericResponse {
  membership: Membership;
}

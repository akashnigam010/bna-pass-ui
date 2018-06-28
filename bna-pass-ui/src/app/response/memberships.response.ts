import {Membership} from './membership';
import { GenericResponse } from './generic.response';

export class MembershipsResponse extends GenericResponse {
  memberships: Membership[];
}

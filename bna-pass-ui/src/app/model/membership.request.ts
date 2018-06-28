import {GenericRequest} from '../response';

export class MembershipRequest extends GenericRequest {
  id: number;
  memberId: number;
  status: string;
  description: string;
  dayType: string;
  entriesPerDay: number;
  startDate: string;
  endDate: string;
}

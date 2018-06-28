import {Member} from './member';

export class Membership {
  id: number;
  member: Member;
  status: string;
  description: string;
  dayType: string;
  entriesPerDay: number;
  startDate: string;
  endDate: string;
}

import {GenericResponse} from './generic.response';

export class MemberResponse extends GenericResponse {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

import { GenericRequest } from '.';

export class Member extends GenericRequest {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  phone: string;
  email: string;
  idProof: string;
  address: string;
}

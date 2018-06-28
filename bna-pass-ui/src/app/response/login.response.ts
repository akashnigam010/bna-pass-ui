import {GenericResponse} from './generic.response';
import {User} from './user';

export class LoginResponse extends GenericResponse {
  user: User;
  accessToken: string;
}

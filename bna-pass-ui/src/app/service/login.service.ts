import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {WebApiProvider} from '../provider';
import {LoginResponse} from '../response/login.response';
import {URLs} from '../util/urls';
import { Login } from '../model';

@Injectable()
export class LoginService {
  constructor(private webApiProvider: WebApiProvider) {}

  public authenticate(login: Login): Observable<LoginResponse> {
    return this.webApiProvider.post<LoginResponse>(URLs.login, login, true, false, false);
  }

  public logout() {
    localStorage.clear();
  }
}

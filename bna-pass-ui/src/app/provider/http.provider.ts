import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

import {LoginResponse} from '../response/login.response';
import {CONSTANTS} from '../util/constants';

@Injectable()
export class HttpProvider {
  public baseUrl: string|null = null;
  public ticketKey: string|null = null;


  constructor(private http: HttpClient) {}


  public formatUrl(relativeUrl: string): string {
    if (!relativeUrl) {
      throw new Error('missing relativeUrl');
    }

    if (this.baseUrl) {
      return this.baseUrl + relativeUrl;
    }

    return relativeUrl;
  }

  public get<T>(relativeUrl: string, data?: any, secure: boolean = true):
      Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    if (secure) {
      return this.requestSecure<T>(relativeUrl, 'Get', data, false);
    } else {
      return this.request<T>(relativeUrl, 'Get', data, false);
    }
  }

  public post<T>(
      relativeUrl: string, data: any, useRelativeUrl: boolean,
      formUrlEncoded: boolean = false, secure: boolean = true): Observable<T> {
    if (useRelativeUrl) {
      relativeUrl = this.formatUrl(relativeUrl);
    }
    if (secure) {
      return this.requestSecure(relativeUrl, 'Post', data, formUrlEncoded);
    } else {
      return this.request(relativeUrl, 'Post', data, formUrlEncoded);
    }
  }

  public postFile<T>(relativeUrl: string, formData: FormData): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.http.post(relativeUrl, formData, {}).pipe(map(res => <T>res));
  }

  public put<T>(relativeUrl: string, data?: any): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.request(relativeUrl, 'Put', data, false);
  }

  public patch<T>(relativeUrl: string, data: any): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.request(relativeUrl, 'Patch', data, false);
  }

  public delete<T>(relativeUrl: string, data: any): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.request(relativeUrl, 'Delete', data, false);
  }

  public head<T>(relativeUrl: string): Observable<T> {
    relativeUrl = this.formatUrl(relativeUrl);
    return this.request(relativeUrl, 'Head', null, false);
  }

  public request<T>(
      relativeUrl: string, method: string, data?: any,
      formatUrl: boolean = true): Observable<T> {
    if (formatUrl) {
      relativeUrl = this.formatUrl(relativeUrl);
    }

    return this.http
        .request(method, relativeUrl, {body: data, responseType: 'text'})
        .pipe(map(res => {
          if (!res) {
            return <any>res;
          }

          return <T>JSON.parse(res);
        }));
  }

  public requestSecure<T>(
      relativeUrl: string, method: string, data?: any,
      formatUrl: boolean = true): Observable<T> {
    if (formatUrl) {
      relativeUrl = this.formatUrl(relativeUrl);
    }

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' +
          JSON.parse(localStorage.getItem(CONSTANTS.USER)).accessToken
    });

    return this.http
        .request(
            method, relativeUrl,
            {body: data, responseType: 'text', headers: headers})
        .pipe(map(res => {
          if (!res) {
            return <any>res;
          }

          return <T>JSON.parse(res);
        }));
  }
}

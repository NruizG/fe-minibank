import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestAuthenticated } from 'src/app/enums/request-authenticated.enum';
import { RequestTarget } from 'src/app/enums/request-target.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private token: string;
  private customerDni: string;

  constructor(private http: HttpClient) { }

  public get<T>(uri: string, options: any = {}): Observable<T> {
    const option = this.generateDefault(options);

    return <Observable<T>>this.http.get(`${this.getPath(option.target)}/${uri}`, this.generateOptions(option));
  }

  public post<T>(uri: string, data: any, options: any = {}): Observable<T> {
    const option = this.generateDefault(options);
    return <Observable<T>>this.http.post(`${this.getPath(option.target)}/${uri}`, data, this.generateOptions(option));
  }

  public patch<T>(uri: string, data: any, options: any = {}): Observable<T> {
    const option = this.generateDefault(options);

    return <Observable<T>>this.http.patch(`${this.getPath(option.target)}/${uri}`, data, this.generateOptions(option));
  }

  public put<T>(uri: string, data: any, options: any = {}): Observable<T> {
    const option = this.generateDefault(options);

    return <Observable<T>>this.http.put(`${this.getPath(option.target)}/${uri}`, data, this.generateOptions(option));
  }

  public delete<T>(uri: string, options: any = {}): Observable<T> {
    const option = this.generateDefault(options);

    return <Observable<T>>this.http.patch(`${this.getPath(option.target)}/${uri}`, this.generateOptions(option));
  }

  public createHeaders(auth: RequestAuthenticated = RequestAuthenticated.AUTHENTICATED): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=UTF-8');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Access-Control-Allow-Headers', '*');
    if (this.token && auth === RequestAuthenticated.AUTHENTICATED) {
      headers = headers.set('Authorization', `Bearer ${this.token}`);
      headers = headers.set('customerDni', `${this.customerDni}`);
    }
    return headers;
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public setCustomerDni(dni: string): void {
    this.customerDni = dni;
  }

  private generateDefault(options: any = {}): any {
    return {
      target: RequestTarget.PLATFORM,
      auth: RequestAuthenticated.AUTHENTICATED,
      ...options
    };
  }

  private generateOptions(options: any = {}): { headers: HttpHeaders} {
    const opt = this.generateDefault(options);
    return {
      headers: this.createHeaders(opt.auth)
    };
  }

  public getPath(target: RequestTarget): string {
    switch (target) {
      case RequestTarget.AUTHENTICATION:
        return environment.API_AUTHENTICATION;
      case RequestTarget.PLATFORM:
        return environment.API_PLATFORM;
      default:
        return environment.API_PLATFORM;
    }
  }
}

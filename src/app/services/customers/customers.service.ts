import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRQ } from 'src/app/dtos/login-rq.dto';
import { LoginRS } from 'src/app/dtos/login-rs.dto';
import { RequestAuthenticated } from 'src/app/enums/request-authenticated.enum';
import { RequestTarget } from 'src/app/enums/request-target.enum';
import { Customer } from 'src/app/models/customer.model';
import { RestService } from '../rest/rest.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customer: Customer;
  private token: string;

  constructor(
    private rest: RestService,
    private router: Router
  ) { }

  public register(customer: Customer): Observable<any> {
    return this.rest.post('customers', customer, {
      target: RequestTarget.AUTHENTICATION,
      auth: RequestAuthenticated.WITHOUT
    });
  }

  public login(customer: LoginRQ): Observable<LoginRS> {
    return new Observable<LoginRS>(observe => {
      this.rest.post('customers/auth', customer, {
        target: RequestTarget.AUTHENTICATION,
        auth: RequestAuthenticated.WITHOUT
      }).subscribe((response: LoginRS) => {
        this.setTokenInfo(response);
        observe.next(response);
        observe.complete();
      }, error => {
        observe.error(error);
        observe.complete();
      });
    })
  }

  public setTokenInfo(response: LoginRS): void {
    this.token = response.token;
    this.customer = response.customer;
    if (this.token) {
      localStorage.setItem('token', this.token.toString())
    }
  }

  public async isLogged(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token) as any;
      this.rest.setToken(token);
      if (!this.customer) {
        await this.validateToken().toPromise()
          .then(response => {
            this.customer = new Customer(response.customer);
          })
          .catch(err => {
            localStorage.clear();
            this.router.navigate(['login']);
          });
      }
      const currentDate = Date.now();
      if (((currentDate-(currentDate%1000))/1000) <= decodedToken?.exp) {
        return true;
      }
      localStorage.clear();
      this.router.navigate(['login']);
      return false;
    }

    localStorage.clear();
    this.router.navigate(['login']);
    return false;
  }

  public validateToken(): Observable<LoginRS> {
    return new Observable<LoginRS>(observe => {
      this.rest.get('customers/authorize', {
        target: RequestTarget.AUTHENTICATION
      }).subscribe((response: LoginRS) => {
        this.setTokenInfo(response);
        observe.next(response);
        observe.complete();
      }, error => {
        observe.error(error);
        observe.complete();
      });
    })
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestAuthenticated } from 'src/app/enums/request-authenticated.enum';
import { RequestTarget } from 'src/app/enums/request-target.enum';
import { Customer } from 'src/app/models/customer.model';
import { environment } from 'src/environments/environment';
import { RestService } from '../rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private rest: RestService,
    private http: HttpClient
  ) { }

  public register(customer: Customer): Observable<any> {
    return this.rest.post('customers', customer, {
      target: RequestTarget.AUTHENTICATION,
      auth: RequestAuthenticated.WITHOUT
    });
  }
}

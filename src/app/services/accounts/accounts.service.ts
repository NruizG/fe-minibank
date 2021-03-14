import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest/rest.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(
    private rest: RestService
  ) { }

  
}

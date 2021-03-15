import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';
import { RestService } from '../rest/rest.service';
import { Account } from 'src/app/models/account.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(
    private rest: RestService
  ) { }

  public getHistory(): Observable<Transaction[]> {
    return this.rest.get('transactions/history');
  }

  public getAccountInfo(): Observable<Account> {
    return this.rest.get('accounts/info');
  }
}

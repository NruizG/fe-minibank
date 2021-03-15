import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';
import { RestService } from '../rest/rest.service';
import { Account } from 'src/app/models/account.model';
import { TransactionDto } from 'src/app/dtos/transaction.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private rest: RestService
  ) { }

  public getHistory(): Observable<Transaction[]> {
    return this.rest.get('transactions/history');
  }

  public getAccountInfo(): Observable<Account> {
    return this.rest.get('accounts/info');
  }

  public transferFounds(transaction: TransactionDto): Observable<Transaction> {
    const tmpTransaction = {...transaction};
    delete tmpTransaction.customerDni;
    return this.rest.post(`accounts/${transaction.customerDni}/transfer`, tmpTransaction);
  }
}

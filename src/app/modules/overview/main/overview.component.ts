import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { HistoryService } from 'src/app/services/history/history.service';
import { Account } from 'src/app/models/account.model';
import * as dayjs from 'dayjs';
import { TransactionType } from 'src/app/enums/transaction-type.enum';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public transactions: Transaction[];
  public transactionType = TransactionType;
  public account: Account;
  public currentDate: string;
  public isLoading: boolean;
  public isInfoLoading: boolean;

  constructor(
    private historyService: HistoryService,
    private dialog: DialogService
  ) { }

  public ngOnInit(): void {
    this.getAccountInfo();
    this.getCurrentDate();
    this.getTransactions();
  }

  public getAccountInfo(): void {
    this.isInfoLoading = true;
    this.historyService.getAccountInfo().subscribe(response => {
      this.account =  new Account(response);
      this.isInfoLoading = true;
    }, error => {
      this.dialog.danger('Error al obtener la información de tu cuenta');
      this.isInfoLoading = true;
    });
  }

  public getTransactions(): void {
    this.isLoading = true;
    this.historyService.getHistory().subscribe(response => {
      this.transactions = response.map(transaction => new Transaction(transaction));
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      this.dialog.danger('Error al obtener historial de transacciones');
    });
  }

  public getCurrentDate(): void {
    this.currentDate = dayjs().format('DD/MM/YYYY HH:mm');
  }
}

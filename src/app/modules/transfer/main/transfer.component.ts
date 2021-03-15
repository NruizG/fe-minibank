import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { TransactionDto } from 'src/app/dtos/transaction.dto';
import { Account } from 'src/app/models/account.model';
import { Transaction } from 'src/app/models/transaction.model';
import { AccountService } from 'src/app/services/account/account.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  public currentStep: number;
  public transaction: TransactionDto
  public account: Account;
  public currentDate: string;
  public isLoading: boolean;
  public result: string;
  public presetData: boolean;
  public succesfulTransaction: Transaction;

  constructor(
    private accountService: AccountService,
    private dialog: DialogService
  ) { }

  public ngOnInit(): void {
    this.currentStep = 0;
    this.getAccountInfo();
  }

  public getAccountInfo(): void {
    this.accountService.getAccountInfo().subscribe(response => {
      this.account =  new Account(response);
      this.getCurrentDate();
    }, error => {
      this.dialog.danger('Error al obtener la información de tu cuenta');
    });
  }

  public getCurrentDate(): void {
    this.currentDate = dayjs().format('DD/MM/YYYY HH:mm');
  }

  public getTransactionData(transaction: TransactionDto): void {
    this.transaction = transaction;
    this.nextStep();
  }

  public makeTransaction(): void {
    this.isLoading = true;
    this.accountService.transferFounds(this.transaction).subscribe(response => {
      this.isLoading = false;
      this.succesfulTransaction = new Transaction(response);
      this.result = 'SUCCESS';
      this.nextStep();
    }, error => {
      console.log(error)
      this.result = error?.error?.message;
      console.log(error?.message)
      this.isLoading = false;
      this.nextStep();
    });
  }

  public goToFirstStep(reset: boolean = false): void {
    this.presetData = false;
    this.getAccountInfo();
    if (!reset) {
      this.presetData = true;
    }
    this.currentStep = 0;
  }

  public nextStep(): void {
    this.currentStep++;
  }

  public backStep(): void {
    this.currentStep--;
  }
}

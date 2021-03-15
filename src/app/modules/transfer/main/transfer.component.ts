import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  public transaction: Transaction
  public account: Account;

  constructor(
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe,
    private accountService: AccountService,
    private dialog: DialogService
  ) { }

  public ngOnInit(): void {
    this.currentStep = 0;
    this.getAccountInfo();
  }

  public getTransactionData(transaction: Transaction): void {
    this.transaction = transaction;
    this.nextStep();
  }

  public getAccountInfo(): void {
    this.accountService.getAccountInfo().subscribe(response => {
      this.account =  new Account(response);
    }, error => {
      this.dialog.danger('Error al obtener la información de tu cuenta');
    });
  }

  public nextStep(): void {
    this.currentStep++;
  }

  public backStep(): void {
    this.currentStep--;
  }
}

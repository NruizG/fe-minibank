import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { TransactionDto } from 'src/app/dtos/transaction.dto';
import { TransactionType } from 'src/app/enums/transaction-type.enum';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account/account.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  public currentDate: string;
  public account: Account;
  public transactionForm: FormGroup;
  public transactionType = TransactionType;
  public selectedTransaction: TransactionType;

  constructor(
    private accountService: AccountService,
    private dialog: DialogService,
    private formBuilder: FormBuilder,
    private currencyPipe: CurrencyPipe,
    private notification: NzNotificationService
  ) { }

  public ngOnInit() {
    this.getAccountInfo();
    this.buildForm();
    this.selectedTransaction = TransactionType.DEPOSIT
  }

  public buildForm(): void {
    this.transactionForm = this.formBuilder.group({
      amount: [null, Validators.required]
    });

    this.subscribeToAmount();
  }

  public submitTransaction(): void {
    const transaction = this.transactionForm.getRawValue();
    transaction.type = this.selectedTransaction
    transaction.amount = Number(transaction.amount.replace('.', ''));
    switch (this.selectedTransaction) {
      case TransactionType.DEPOSIT:
        this.makeDeposit(transaction);
        break;
      case TransactionType.WITHDRAW:
        this.makeWithdraw(transaction);
    }
  }

  public makeDeposit(transaction: Partial<TransactionDto>): void {
    this.accountService.makeDeposit(transaction).subscribe(response => {
      this.notification.success('Transacción exitosa', 'Los fondos han sido añadidos a su cuenta');
      this.getAccountInfo();
    }, error => {
      this.notification.error('Ha ocurrido un error', 'Error al transferir fondos, intentelo nuevamente');
    });
  }

  public makeWithdraw(transaction: Partial<TransactionDto>): void {
    this.accountService.makeWithdraw(transaction).subscribe(response => {
      this.notification.success('Transacción exitosa', 'Los fondos han sido retirados a su cuenta');
      this.getAccountInfo();
    }, error => {
      this.notification.error('Ha ocurrido un error', 'Error al transferir fondos, intentelo nuevamente');
    });
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

  public subscribeToAmount(): void {
    this.transactionForm.get('amount').valueChanges.subscribe(value => {
      if (value) {
        this.transactionForm.patchValue({
          amount: this.currencyPipe.transform(value.replace(/\D/g, '')
            .replace(/^0+/, ''), 'CLP', '', '1.0-0', 'es_ES')
        }, { emitEvent: false });
      }
    });
  }
}

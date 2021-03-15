import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { TransactionType } from 'src/app/enums/transaction-type.enum';
import { Account } from 'src/app/models/account.model';
import { Transaction } from 'src/app/models/transaction.model';
import { AccountService } from 'src/app/services/account/account.service';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-tranfer-form',
  templateUrl: './tranfer-form.component.html',
  styleUrls: ['./tranfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
  @Input() public transferForm: FormGroup;
  @Output() public onNext: EventEmitter<Transaction> = new EventEmitter();
  public currentDate: string;
  public account: Account;
  
  constructor(
    private formBuilder: FormBuilder,
    private currencyPipe: CurrencyPipe,
    private dialog: DialogService,
    private accountService: AccountService
  ) { }

  public ngOnInit(): void {
    this.buildForm();
    this.getAccountInfo();
    this.getCurrentDate();
  }

  public buildForm(): void {
    this.transferForm = this.formBuilder.group({
      customerDni: [null, Validators.required],
      amount: [null, Validators.required]
    });

    this.subcribeToAmount();
  }

  public subcribeToAmount(): void {
    this.transferForm.get('amount').valueChanges.subscribe(value => {
      if (value) {
        this.transferForm.patchValue({
          amount: this.currencyPipe.transform(value.replace(/\D/g, '')
            .replace(/^0+/, ''), 'CLP', '', '1.0-0', 'es_ES')
        }, { emitEvent: false });
      }
    });
  }

  public formatRut(): void {
    let dni = this.transferForm.get('customerDni').value;
    if (dni?.length) {
      dni = dni.replace('.', '').replace('-', '');
      const module = dni.substr(dni.length - 1);
      dni = dni.slice(0, -1);
      dni = dni.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      dni = dni + `-${module}`;
      this.transferForm.get('customerDni').setValue(dni);
    }
  }

  public getCurrentDate(): void {
    this.currentDate = dayjs().format('DD/MM/YYYY HH:mm');
  }
  
  public getAccountInfo(): void {
    this.accountService.getAccountInfo().subscribe(response => {
      this.account =  new Account(response);
    }, error => {
      this.dialog.danger('Error al obtener la información de tu cuenta');
    });
  }

  public submit(): void {
    for (const i in this.transferForm.controls) {
      this.transferForm.controls[i].markAsDirty();
      this.transferForm.controls[i].updateValueAndValidity();
    }
    const formData = this.transferForm.getRawValue();
    formData.amount = formData.amount.replace('.', '');
    this.verifyBalance(formData.amount)
    
    if (this.transferForm.valid) {
      formData.type = TransactionType.TRANSFEROUT;
      this.onNext.emit(new Transaction(formData));
    }
  }

  public verifyBalance(amount: number): boolean {
    if (amount >= this.account.balance) {
      this.dialog.danger('El monto excede el saldo disponible');
      return false;
    }

    return true;
  }
}

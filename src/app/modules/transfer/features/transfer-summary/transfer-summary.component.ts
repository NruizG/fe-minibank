import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransactionDto } from 'src/app/dtos/transaction.dto';
import { Account } from 'src/app/models/account.model';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transfer-summary',
  templateUrl: './transfer-summary.component.html',
  styleUrls: ['./transfer-summary.component.scss']
})
export class TransferSummaryComponent {
  @Output() public onBack: EventEmitter<boolean> = new EventEmitter();
  @Output() public onConfirm: EventEmitter<boolean> = new EventEmitter();
  @Input() public transaction: TransactionDto;
  @Input() public account: Account;
  @Input() public currentDate: string;

  constructor(
    private fb: FormBuilder
  ) { }

  public confirm(): void {
    this.onConfirm.emit();
  }

  public goBack(): void {
    this.onBack.emit();
  }
}

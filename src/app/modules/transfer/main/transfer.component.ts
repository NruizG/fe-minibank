import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  public currentStep: number;
  public transaction: Transaction

  constructor(
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe
  ) { }

  public ngOnInit(): void {
    this.currentStep = 0;
  }

  public getTransactionData(transaction: Transaction): void {
    this.transaction = transaction;
    this.nextStep();
  }

  public nextStep(): void {
    this.currentStep++;
  }

  public backStep(): void {
    this.currentStep--;
  }
}

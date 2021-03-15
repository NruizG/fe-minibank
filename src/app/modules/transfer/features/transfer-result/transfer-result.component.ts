import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransactionDto } from 'src/app/dtos/transaction.dto';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-transfer-result',
  templateUrl: './transfer-result.component.html',
  styleUrls: ['./transfer-result.component.scss']
})
export class TransferResultComponent implements OnInit {
  @Input() public intendedTransaction?: TransactionDto;
  @Input() public transaction?: Transaction
  @Input() public result: string;
  @Output() public onBack: EventEmitter<boolean> = new EventEmitter();
  @Output() public onTryAgain: EventEmitter<boolean> = new EventEmitter();
  public subtitle: string;
  
  constructor() { }

  public ngOnInit(): void {
    if (this.result === 'SUCCESS') {
      this.subtitle = `Transferencia N°${this.transaction.id}, destino: 
      ${this.intendedTransaction.customerDni}, monto: 
      ${this.intendedTransaction.amount}`;
    }
  }

  public goBack(): void {
    this.onBack.emit();
  }

  public tryAgain(): void {
    this.onTryAgain.emit();
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { TransactionType } from '../enums/transaction-type.enum';
/*  Formats startDate and endDate to string readeable values */
@Pipe({
  name: 'transactionPipe'
})
export class TransactionPipe implements PipeTransform {
  transform(transactionType: TransactionType): any {
    switch (transactionType) {
      case TransactionType.DEPOSIT:
        return 'Depósito';
      case TransactionType.TRANSFERIN:
        return 'Transferencia';
      case TransactionType.TRANSFEROUT:
        return 'Transferencia a terceros';
      case TransactionType.WITHDRAW:
        return 'Retiro';
    }
  }
}

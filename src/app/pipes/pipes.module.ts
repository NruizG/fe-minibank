import { NgModule } from '@angular/core';
import { DateFormatPipe } from './date-format.pipe';
import { TransactionPipe } from './transactionType.pipe';

@NgModule({
  declarations: [
    DateFormatPipe,
    TransactionPipe
  ],
  exports: [
    DateFormatPipe,
    TransactionPipe
  ]
})
export class PipesModule{
}

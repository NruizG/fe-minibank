import { TransactionType } from "../enums/transaction-type.enum";

export class TransactionDto {
  public customerDni: string;
  public amount: number;
  public type: TransactionType;

  constructor(data?: any) { 
    if (data) {
      this.customerDni = data.customerDni;
      this.amount = data.amount;
      this.type = data.type;
    }
  }
}
import { TransactionType } from "../enums/transaction-type.enum";

export class Transaction {
  public id?: number;
  public amount: number;
  public type: TransactionType;
  public account?: number;
  public createdAt?: Date;

  constructor(data?: any) {
    this.id = data.id || undefined;
    this.amount = data.amount;
    this.type = data.type;
    this.account = data.account || undefined;
    this.createdAt = data.createdAt;
  }
}
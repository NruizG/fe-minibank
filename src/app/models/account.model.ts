export class Account {
  public id?: number;
  public number: number;
  public balance: number;
  
  constructor(data?: any) {
    this.id = data.id;
    this.number = data.number;
    this.balance = data.balance;
  }
}
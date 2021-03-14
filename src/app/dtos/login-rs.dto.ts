import { Customer } from "../models/customer.model";

export class LoginRS {
  public customer: Customer;
  public token: string;

  constructor(data: any = null) {
    if (data) {
      this.customer = data.customer;
      this.token = data.token;
    }
  }
}

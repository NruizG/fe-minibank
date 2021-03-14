export class Customer {
  public id?: number;
  public name: string;
  public dni: string;
  public email: string;
  public password?: string;

  constructor(data?: any) {
    if (data) {
      this.id = data.id || undefined;
      this.name = data.name;
      this.dni = data.dni;
      this.email = data.email;
      this.password = data.password;
    }
  }
}
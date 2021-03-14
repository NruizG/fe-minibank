export class LoginRQ {
  public dni: string;
  public password: string;

  constructor(data?: any) {
    this.dni = data.dni;
    this.password = data.password;
  }
}
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CustomersService } from '../customers/customers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private customerService: CustomersService) {}

  public async canActivate(): Promise<boolean> {
    return await this.customerService.isLogged();
  }
}

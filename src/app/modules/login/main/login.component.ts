import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public tabIndex: number;

  constructor(
    private customerService: CustomersService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.verifyIfLogged();
  }

  public verifyIfLogged(): void {
    if (this.customerService.isLogged()) {
      this.router.navigate(['overview']);
    }
  }
}

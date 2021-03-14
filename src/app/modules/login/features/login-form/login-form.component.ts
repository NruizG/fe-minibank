import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginRQ } from 'src/app/dtos/login-rq.dto';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public isLoading: boolean;
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomersService,
    private notification: NzNotificationService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.loginForm = this.fb.group({
      dni: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public login(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    this.formatRut();
    if (this.loginForm.valid) {
      this.isLoading = true;
      const loginData = this.loginForm.getRawValue();
      this.customerService.login(new LoginRQ(loginData)).subscribe(response => {
        this.isLoading = false;
        this.router.navigate(['dashboard'])
        this.notification.success('Sesión iniciada', 'Bienvenido a Mini Bank');
      }, error => {
        let message = 'Intentelo más tarde';
        if (error.status === 403) {
          message = 'El RUT o contraseña no son válidos';
        }
        this.isLoading = false;
        this.notification.error('Ha ocurrido un error', message);
      });
    }
  }

  public formatRut(): void {
    let dni = this.loginForm.get('dni').value.toString();
    dni = dni.replace('.', '').replace('-', '');
    const module = dni.substr(dni.length - 1);
    dni = dni.slice(0, -1);
    dni = dni.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    dni = dni + `-${module}`;
    this.loginForm.get('dni').setValue(dni);
  }
}

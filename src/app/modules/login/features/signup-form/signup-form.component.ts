import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignUpComponent implements OnInit {
  @Output() public onRegistered: EventEmitter<any> = new EventEmitter()
  public registerForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomersService,
    private notification: NzNotificationService
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      dni: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }

  public register(): void {
    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity();
    }
    this.formatRut();

    if (this.registerForm.valid) {
      const customer = this.registerForm.getRawValue();
      this.isLoading = true;
      this.customerService.register(new Customer(customer)).subscribe(response => {
        this.isLoading = false;
        this.notification.success('Registro exitoso!', 'Ahora puedes ingresar con tu RUT y contraseña');
        this.onRegistered.emit();
      }, error => {
        this.isLoading = false;
        let message = 'Intentelo más tarde';
        if (error.status === 409) {
          message = 'El usuario ya está registrado';
        }        
        
        this.notification.error('Ha ocurrido un error', message);
      });
    }
  }

  public updateConfirmValidator(): void {
    Promise.resolve().then(() => this.registerForm.controls.checkPassword.updateValueAndValidity());
  }

  public confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  public formatRut(): void {
    let dni = this.registerForm.get('dni').value;
    if (dni?.length) {
      dni = dni.replace('.', '').replace('-', '');
      const module = dni.substr(dni.length - 1);
      dni = dni.slice(0, -1);
      dni = dni.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      dni = dni + `-${module}`;
      this.registerForm.get('dni').setValue(dni);
    }
  }
}

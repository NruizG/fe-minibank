import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignUpComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder
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
}

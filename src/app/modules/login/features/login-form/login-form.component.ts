import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder
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

      // makes api Call
    }
  }
}

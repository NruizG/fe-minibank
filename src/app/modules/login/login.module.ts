import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { LoginComponent } from './main/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { SignUpComponent } from './features/signup-form/signup-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    SignUpComponent
  ],
  imports: [
    LoginRoutingModule,
    IconsProviderModule,
    FormsModule,
    CommonModule,
    NzTabsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }


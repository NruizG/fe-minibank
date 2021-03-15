import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { TransactionComponent } from './main/transaction.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { Permission, RoledMenu, RoledModule, RoledSubmodule } from 'gungnir-role-utils';
import { MenuComponent } from './menu/menu.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@NgModule({
  imports: [
    TransactionRoutingModule,
    IconsProviderModule,
    ReactiveFormsModule,
    NzLayoutModule,
    FormsModule,
    NzMenuModule,
    CommonModule,
    NzToolTipModule,
    NzBreadCrumbModule,
    NzStepsModule,
    NzButtonModule,
    NzRadioModule,
    NzFormModule,
    NzInputModule
  ],
  declarations: [TransactionComponent],
  exports: [TransactionComponent],
  providers: [
    DialogService,
    NzMessageService,
    CurrencyPipe,
    NzNotificationService
  ]
})
export class TransactionModule extends RoledModule{
  public static getMenuView(): RoledMenu {
    return MenuComponent;
  }

  public static getPermissions(): Permission[] {
    return [];
  }

  public static getQualifiedName(): string {
    return 'Transaction';
  }

  public static getModuleName(): string {
    return 'TransactionModule';
  }

  public static getSubmodules(): RoledSubmodule[] {
    return [];
  }
}

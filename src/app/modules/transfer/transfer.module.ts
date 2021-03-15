import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { TransferComponent } from './main/transfer.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { Permission, RoledMenu, RoledModule, RoledSubmodule } from 'gungnir-role-utils';
import { MenuComponent } from './menu/menu.component';
import { TransferRoutingModule } from './transfer-routing.module';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { TransferFormComponent } from './features/tranfer-form/tranfer-form.component';
import { TransferSummaryComponent } from './features/transfer-summary/transfer-summary.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import es from '@angular/common/locales/es';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzResultModule } from 'ng-zorro-antd/result';
import { TransferResultComponent } from './features/transfer-result/transfer-result.component';

registerLocaleData(es);

@NgModule({
  imports: [
    TransferRoutingModule,
    IconsProviderModule,
    CommonModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    CommonModule,
    NzToolTipModule,
    NzBreadCrumbModule,
    NzStepsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSpinModule,
    NzResultModule
  ],
  declarations: [
    TransferComponent,
    TransferFormComponent,
    TransferSummaryComponent,
    TransferResultComponent
  ],
  exports: [TransferComponent],
  providers: [CurrencyPipe, DialogService, NzMessageService]
})
export class TransferModule extends RoledModule{
  public static getMenuView(): RoledMenu {
    return MenuComponent;
  }

  public static getPermissions(): Permission[] {
    return [];
  }

  public static getQualifiedName(): string {
    return 'Transfer';
  }

  public static getModuleName(): string {
    return 'TransferModule';
  }

  public static getSubmodules(): RoledSubmodule[] {
    return [];
  }
}

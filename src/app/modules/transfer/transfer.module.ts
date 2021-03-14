import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { TransferComponent } from './main/transfer.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { Permission, RoledMenu, RoledModule, RoledSubmodule } from 'gungnir-role-utils';
import { MenuComponent } from './menu/menu.component';
import { TransferRoutingModule } from './transfer-routing.module';


@NgModule({
  imports: [
    TransferRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    CommonModule,
    NzToolTipModule,
    NzBreadCrumbModule
  ],
  declarations: [TransferComponent],
  exports: [TransferComponent]
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

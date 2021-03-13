import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { DashboardComponent } from './main/dashboard.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { Permission, RoledMenu, RoledModule, RoledSubmodule } from 'gungnir-role-utils';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    DashboardRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    CommonModule,
    NzToolTipModule,
    NzBreadCrumbModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule extends RoledModule{
  public static getMenuView(): RoledMenu {
    return MenuComponent;
  }

  public static getPermissions(): Permission[] {
    return [];
  }

  public static getQualifiedName(): string {
    return 'Dashboard';
  }

  public static getModuleName(): string {
    return 'DashboardModule';
  }

  public static getSubmodules(): RoledSubmodule[] {
    return [];
  }
}

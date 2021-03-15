import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { HistoryComponent } from './main/history.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { Permission, RoledMenu, RoledModule, RoledSubmodule } from 'gungnir-role-utils';
import { MenuComponent } from './menu/menu.component';
import { HistoryRoutingModule } from './history-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    HistoryRoutingModule,
    IconsProviderModule,
    PipesModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    CommonModule,
    NzToolTipModule,
    NzBreadCrumbModule,
    NzTableModule,
    NzSpinModule,
    NzTagModule
  ],
  declarations: [HistoryComponent],
  exports: [HistoryComponent],
  providers: [DialogService, NzMessageService]
})
export class HistoryModule extends RoledModule{
  public static getMenuView(): RoledMenu {
    return MenuComponent;
  }

  public static getPermissions(): Permission[] {
    return [];
  }

  public static getQualifiedName(): string {
    return 'History';
  }

  public static getModuleName(): string {
    return 'HistoryModule';
  }

  public static getSubmodules(): RoledSubmodule[] {
    return [];
  }
}

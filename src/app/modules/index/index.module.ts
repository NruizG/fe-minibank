import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@NgModule({
  imports: [
    IndexRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    CommonModule,
    NzToolTipModule,
    NzBreadCrumbModule
  ],
  declarations: [IndexComponent],
  exports: [IndexComponent],
})
export class IndexModule { }

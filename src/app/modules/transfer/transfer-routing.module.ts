import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferComponent } from './main/transfer.component';

const routes: Routes = [
  {
    path: '',
    component: TransferComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule {}

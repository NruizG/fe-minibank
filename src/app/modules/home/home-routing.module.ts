import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    loadChildren: () => import('../overview/overview.module').then(m => m.OverviewModule),
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Saldo y movimientos'
    }
  },
  {
    path: 'transfer',
    loadChildren: () => import('../transfer/transfer.module').then(m => m.TransferModule),
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Transferencias'
    }
  },
  {
    path: 'transaction',
    loadChildren: () => import('../transaction/transaction.module').then(m => m.TransactionModule),
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Depositar/Retirar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

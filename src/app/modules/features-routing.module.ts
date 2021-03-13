import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FeaturesRoutingModule { }

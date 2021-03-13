import { LoginModule } from './login/login.module';
import { RoledModule } from 'gungnir-role-utils';
import { DashboardModule } from './dashboard/dashboard.module';

export const modules: RoledModule[] = [
  DashboardModule
];

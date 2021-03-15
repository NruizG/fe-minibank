import { LoginModule } from './login/login.module';
import { RoledModule } from 'gungnir-role-utils';
import { OverviewModule } from './overview/overview.module';
import { TransferModule } from './transfer/transfer.module';
import { TransactionModule } from './transaction/transaction.module';

export const modules: RoledModule[] = [
  OverviewModule,
  TransferModule,
  TransactionModule
];

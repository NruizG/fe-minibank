import { LoginModule } from './login/login.module';
import { RoledModule } from 'gungnir-role-utils';
import { OverviewModule } from './overview/overview.module';
import { HistoryModule } from './history/history.module';
import { TransferModule } from './transfer/transfer.module';
import { TransactionModule } from './transaction/transaction.module';

export const modules: RoledModule[] = [
  OverviewModule,
  HistoryModule,
  TransferModule,
  TransactionModule
];

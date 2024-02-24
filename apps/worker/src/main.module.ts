import { Module } from '@nestjs/common';

import { ExchangeRatesWorkerModule } from './exchange-rates-worker/exchange-rates-worker.module';

@Module({
  imports: [ExchangeRatesWorkerModule],
  controllers: [],
  providers: [],
})
export class MainModule {}

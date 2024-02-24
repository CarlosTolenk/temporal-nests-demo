import { Module } from '@nestjs/common';

import { ActivitiesModule } from './activities/activities.module';
import { exchangeRatesProviders } from './exchange-rates.providers';
import { ExchangeRatesService } from './exchange-rates.service';

@Module({
  imports: [ActivitiesModule],
  controllers: [],
  providers: [...exchangeRatesProviders, ExchangeRatesService],
})
export class ExchangeRatesModule {}

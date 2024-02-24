import { Module } from '@nestjs/common';
import { ExchangeRatesController } from './exchange-rates.controller';
import { ExchangeRatesService } from './exchange-rates.service';
import { exchangeRatesProviders } from './exchange-rates.providers';


@Module({
  imports: [],
  controllers: [ExchangeRatesController],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  providers: [...exchangeRatesProviders, ExchangeRatesService],
})
export class ExchangeRatesModule {}

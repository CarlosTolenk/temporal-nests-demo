import { Module } from '@nestjs/common';

import { ExchangeRatesModule } from './exchange-rates/exchange-rates.module';
import { SecretKeysModule } from './secret-keys/secret-keys.module';

@Module({
  imports: [ExchangeRatesModule, SecretKeysModule],
  controllers: [],
  providers: [],
})
export class MainModule {}

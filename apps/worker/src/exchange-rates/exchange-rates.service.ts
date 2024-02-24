import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeRatesService {
  constructor(@Inject('EXCHANGE_RATES_WORKER') private worker) {
  }

  async close() {
    await this.worker.close();
  }
}

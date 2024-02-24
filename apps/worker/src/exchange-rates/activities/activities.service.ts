import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ExchangeRates } from '@app/shared';

const url = 'https://cdn.moneyconvert.net/api/latest.json';

interface IResponse {
  table: string;
  rates: { [key: string]: number };
  lastupdate: string;
}

@Injectable()
export class ActivitiesService {
  constructor(public readonly httpService: HttpService) {}

  async getExchangeRates(): Promise<ExchangeRates> {
    const res = await this.httpService.axiosRef.get<IResponse>(url);
    return res.data.rates;
  }
}

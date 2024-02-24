import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ExchangeRates } from '@app/shared';

interface IResponse {
  table: string;
  rates: { [key: string]: number };
  lastupdate: string;
}

@Injectable()
export class ActivitiesService {
  private readonly baseUrl = 'https://cdn.moneyconvert.net/api/latest.json';
  constructor(public readonly httpService: HttpService) {}

  async getExchangeRates(): Promise<ExchangeRates> {
    const res = await this.httpService.axiosRef.get<IResponse>(this.baseUrl);
    return res.data.rates;
  }
}

import { defineQuery } from '@temporalio/workflow';

export const taskQueue = 'nest-test';
export const taskQueueOther = 'nest-test-other';

export type ExchangeRates = { [key: string]: number };

export const getExchangeRatesQuery = defineQuery<ExchangeRates | null>(
  'getExchangeRates',
);
export const getTokenQuery = defineQuery<string | null>('getToken');

export type exchangeRatesWorkflowType = () => Promise<void>;
export type secretKeysWorkflowType = () => Promise<void>;

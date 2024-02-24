import { Provider } from '@nestjs/common';
import {
  Client,
  Connection,
  ConnectionOptions,
  WorkflowExecutionAlreadyStartedError,
} from '@temporalio/client';

import { taskQueue } from '@app/shared';

export const exchangeRatesProviders: Provider[] = [
  {
    provide: 'CONNECTION_CONFIG',
    useValue: {
      address: 'localhost',
    } as ConnectionOptions,
  },
  {
    provide: 'CONNECTION',
    useFactory: async (config: ConnectionOptions) => {
      return await Connection.connect(config);
    },
    inject: ['CONNECTION_CONFIG'],
  },
  {
    provide: 'WORKFLOW_CLIENT',
    useFactory: (connection: Connection) => {
      return new Client({ connection });
    },
    inject: ['CONNECTION'],
  },
  {
    provide: 'EXCHANGE_RATES_WORKFLOW_HANDLE',
    useFactory: async (client: Client) => {
      let handle;
      try {
        handle = await client.workflow.start('exchangeRatesWorkflow', {
          taskQueue,
          workflowId: 'exchange-rates',
        });
        console.log('Started new exchange rates workflow');
      } catch (err) {
        if (err instanceof WorkflowExecutionAlreadyStartedError) {
          console.log('Reusing existing exchange rates workflow');
          handle = client.workflow.getHandle('exchange-rates');
        } else {
          throw err;
        }
      }

      return handle;
    },
    inject: ['WORKFLOW_CLIENT'],
  },
];

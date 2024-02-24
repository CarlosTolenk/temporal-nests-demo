import { Provider } from '@nestjs/common';
import { Worker } from '@temporalio/worker';

import { taskQueue } from '@app/shared';
import { ActivitiesService } from '../activities/activities.service';

export const exchangeRatesWorkerProviders: Provider[] = [
  {
    provide: 'EXCHANGE_RATES_WORKER',
    inject: [ActivitiesService],
    useFactory: async (activitiesService: ActivitiesService) => {
      const activities = {
        getExchangeRates:
          activitiesService.getExchangeRates.bind(activitiesService),
      };

      const workers = await Promise.all([
        Worker.create({
          workflowsPath: require.resolve('../temporal/workflows'),
          taskQueue,
          activities,
        }),
      ]);

      const workersReady = await Promise.all(
        workers.map((worker) => worker.run()),
      );
      console.log('Started workers!');

      return workersReady;
    },
  },
];

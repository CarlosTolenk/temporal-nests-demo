import { Worker } from '@temporalio/worker';
import { taskQueue } from '@app/shared';

import { ActivitiesService } from '../activities/activities.service';

export const exchangeRatesWorkerProviders = [
  {
    provide: 'EXCHANGE_RATES_WORKER',
    inject: [ActivitiesService],
    useFactory: async (activitiesService: ActivitiesService) => {
      const activities = {
        getExchangeRates:
          activitiesService.getExchangeRates.bind(activitiesService),
      };

      const worker = await Worker.create({
        workflowsPath: require.resolve('../temporal/workflows'),
        taskQueue,
        activities,
      });

      worker.run();
      console.log('Started worker!');

      return worker;
    },
  },
];

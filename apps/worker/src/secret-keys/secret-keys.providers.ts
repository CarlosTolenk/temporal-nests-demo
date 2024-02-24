import { Provider } from '@nestjs/common';
import { Worker } from '@temporalio/worker';

import { taskQueueOther } from '@app/shared';
import { ActivitiesService } from './activities/activities.service';

export const secretKeysProviders: Provider[] = [
  {
    provide: 'SECRET_KEYS_WORKER',
    inject: [ActivitiesService],
    useFactory: async (activitiesService: ActivitiesService) => {
      const activities = {
        getToken: activitiesService.getToken.bind(activitiesService),
      };

      const worker = await Worker.create({
        workflowsPath: require.resolve('./temporal/workflows'),
        taskQueue: taskQueueOther,
        activities,
      });

      worker.run();
      console.log('Started worker SECRET_KEYS_WORKER!');

      return worker;
    },
  },
];

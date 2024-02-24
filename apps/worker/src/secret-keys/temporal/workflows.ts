import {
  continueAsNew,
  proxyActivities,
  setHandler,
  sleep,
  workflowInfo,
} from '@temporalio/workflow';

import type { ActivitiesService } from '../activities/activities.service';

// Can't use `@app/shared` here because for some reason Temporal's Webpack
// build complains that "node_modules/@app/shared" doesn't exist in Jest.
import { getTokenQuery } from '../../../../../libs/shared/src';

const { getToken } = proxyActivities<ActivitiesService>({
  startToCloseTimeout: '1 minute',
});

export async function secretKeysWorkflow(storedRates?: string): Promise<void> {
  let rates = storedRates;
  setHandler(getTokenQuery, () => rates);

  while (workflowInfo().historyLength < 50) {
    // Get the latest rates
    rates = await getToken();

    await sleep(5000);
  }

  await continueAsNew<typeof secretKeysWorkflow>(rates);
}

import { Injectable } from '@nestjs/common';
import { uuid4 } from '@temporalio/workflow';

@Injectable()
export class ActivitiesService {
  constructor() {}

  async getToken(): Promise<string> {
    return `token-${uuid4()}`;
  }
}

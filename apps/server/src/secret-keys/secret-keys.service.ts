import { Injectable, Inject } from '@nestjs/common';
import { Client, WorkflowHandle } from '@temporalio/client';
import { getTokenQuery } from '@app/shared';

@Injectable()
export class SecretKeysService {
  constructor(
    @Inject('SECRET_KEYS_WORKFLOW_HANDLE') private handle: WorkflowHandle,
  ) {}

  async getToken() {
    return this.handle.query(getTokenQuery);
  }
}

@Injectable()
export class SecretKeysClient extends Client {}

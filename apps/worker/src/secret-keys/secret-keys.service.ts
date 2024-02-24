import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SecretKeysService {
  constructor(@Inject('SECRET_KEYS_WORKER') private worker) {}

  async close() {
    await this.worker.close();
  }
}

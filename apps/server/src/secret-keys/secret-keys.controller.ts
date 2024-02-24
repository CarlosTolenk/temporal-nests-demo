import { Controller, Get } from '@nestjs/common';
import { SecretKeysService } from './secret-keys.service';

@Controller('secret-keys')
export class SecretKeysController {
  constructor(private readonly secretKeysService: SecretKeysService) {}

  @Get()
  async getExchangeRates(): Promise<string | undefined> {
    const token = await this.secretKeysService.getToken();

    if (token === null) {
      return undefined;
    }

    return token;
  }
}

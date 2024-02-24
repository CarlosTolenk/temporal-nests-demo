import { Module } from '@nestjs/common';
import { SecretKeysService } from './secret-keys.service';
import { SecretKeysController } from './secret-keys.controller';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [SecretKeysController],
  providers: [SecretKeysService],
})
export class SecretKeysModule {}

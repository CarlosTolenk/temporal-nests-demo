import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/activities.module';
import { secretKeysProviders } from './secret-keys.providers';
import { SecretKeysService } from './secret-keys.service';

@Module({
  imports: [ActivitiesModule],
  controllers: [],
  providers: [...secretKeysProviders, SecretKeysService],
})
export class SecretKeysModule {}

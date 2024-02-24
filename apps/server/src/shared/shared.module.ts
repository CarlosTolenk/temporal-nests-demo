import { Module } from '@nestjs/common';
import { sharedTemporalProviders } from './shared.providers';

@Module({
  imports: [],
  controllers: [],
  providers: [...sharedTemporalProviders],
  exports: [...sharedTemporalProviders],
})
export class SharedModule {}

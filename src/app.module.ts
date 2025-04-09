import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TripsModule } from './trips/trips.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [PrismaModule, TripsModule, LocationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

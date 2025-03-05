import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [PrismaModule, TripsModule], // Adicione o PrismaModule aqui
  controllers: [],
  providers: [],
})
export class AppModule {}

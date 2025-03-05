import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Trip, Prisma } from '@prisma/client';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TripCreateInput): Promise<Trip> {
    return this.prisma.trip.create({ data });
  }

  async findAll(): Promise<Trip[]> {
    return this.prisma.trip.findMany();
  }

  async update(id: number, data: Prisma.TripUpdateInput): Promise<Trip> {
    return this.prisma.trip.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Trip> {
    return this.prisma.trip.delete({ where: { id } });
  }
}

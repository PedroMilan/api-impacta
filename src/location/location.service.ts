import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // ajuste se estiver em outro path

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.location.findMany();
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TripsService } from './trips.service';
import { Trip } from '@prisma/client';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('trips') // Adiciona uma tag para agrupar as rotas no Swagger
@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova viagem' })
  @ApiBody({ type: CreateTripDto })
  @ApiResponse({ status: 201, description: 'Viagem criada com sucesso.' })
  async create(@Body() data: CreateTripDto): Promise<Trip> {
    return this.tripsService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as viagens' })
  @ApiResponse({
    status: 200,
    description: 'Lista de viagens retornada com sucesso.',
  })
  async findAll(): Promise<Trip[]> {
    return this.tripsService.findAll();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma viagem pelo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID da viagem' })
  @ApiBody({ type: UpdateTripDto })
  @ApiResponse({ status: 200, description: 'Viagem atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Viagem não encontrada.' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTripDto,
  ): Promise<Trip> {
    return this.tripsService.update(+id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir uma viagem pelo ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID da viagem' })
  @ApiResponse({ status: 200, description: 'Viagem excluída com sucesso.' })
  @ApiResponse({ status: 404, description: 'Viagem não encontrada.' })
  async remove(@Param('id') id: string): Promise<Trip> {
    return this.tripsService.remove(+id);
  }
}

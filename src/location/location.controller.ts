import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { LocationDto } from './dto/location.dto';

@ApiTags('locations')
@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os destinos' })
  @ApiOkResponse({
    description: 'Lista de locais retornada com sucesso',
    type: LocationDto,
    isArray: true,
  })
  findAll(): Promise<LocationDto[]> {
    return this.locationService.findAll();
  }
}

import { ApiProperty } from '@nestjs/swagger';

export class UpdateTripDto {
  @ApiProperty({ description: 'Destino da viagem', required: true })
  destination?: string;

  @ApiProperty({ description: 'Data da viagem', required: true })
  date?: string;
}

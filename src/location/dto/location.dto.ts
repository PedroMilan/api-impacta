import { ApiProperty } from '@nestjs/swagger';

export class LocationDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Paris' })
  city: string;

  @ApiProperty({ example: 'França' })
  country: string;
}

import { ApiProperty } from '@nestjs/swagger';

export default class GetUserDto {
  @ApiProperty({ name: 'id', example: 'uuid' })
  id: string;

  @ApiProperty({})
  firstName: string;

  @ApiProperty({})
  lastName: string;

  @ApiProperty({})
  username: string;

  @ApiProperty({})
  email: string;

  @ApiProperty({})
  note: string;
}

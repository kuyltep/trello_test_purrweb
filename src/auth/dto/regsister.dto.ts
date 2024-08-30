import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import SignInDto from './signIn.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto extends SignInDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  note: string;
}

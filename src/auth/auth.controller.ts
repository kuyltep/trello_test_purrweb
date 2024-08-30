import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import SignInDto from './dto/signIn.dto';
import { RegisterDto } from './dto/regsister.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import GetUserDto from 'src/user/dto/get.user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @ApiBody({ type: RegisterDto })
  @ApiResponse({ type: GetUserDto })
  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<GetUserDto> {
    return this.authService.register(registerDto);
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import SignInDto from './dto/signIn.dto';
import { RegisterDto } from './dto/regsister.dto';
import * as bcrypt from 'bcrypt';
import GetUserDto from 'src/user/dto/get.user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signIn(signInDto: SignInDto) {
    try {
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async register(regsiter: RegisterDto): Promise<GetUserDto> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: regsiter.email.trim(),
        },
      });

      if (user) {
        throw new BadRequestException('USER ALREADY EXIST');
      }
      const { password, ...registerInfo } = regsiter;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const createdUser = await this.prisma.user.create({
        data: {
          ...registerInfo,
          password: hashedPassword,
        },
      });
      const { password: useLessPassword, ...userData } = createdUser;
      return userData;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

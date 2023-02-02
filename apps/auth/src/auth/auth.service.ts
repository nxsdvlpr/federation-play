import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LoginResponseDto } from './dto/login-response.dto';
import { AuthenticatedUser, JwtPayload } from './auth.interfaces';
import { UserService } from 'src/user/user.service';
import { User } from 'generated/prisma/nestgql/user/user.model';
import { UserUpdateInput } from 'generated/prisma/nestgql/user/user-update.input';
import { passwordCompare, passwordHash } from '@nxs/helper';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<AuthenticatedUser | null> {
    const user = await this.userService.findOne({
      email: email,
    });

    if (user && passwordCompare(pass, user.password)) {
      return {
        id: user.id,
        email: user.email,
        role: {},
      };
    }

    return null;
  }

  async currentUser(authUser: AuthenticatedUser): Promise<User> {
    try {
      const user = await this.userService.findOne({
        id: authUser.id,
      });
      return user;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  async login(user: AuthenticatedUser): Promise<LoginResponseDto> {
    const loginUser = await this.userService.findOne({
      id: user.id,
    });

    const payload: JwtPayload = {
      email: loginUser.email,
      sub: loginUser.id,
      role: {},
    };

    return Promise.resolve({
      accessToken: this.jwtService.sign(payload),
    });
  }

  async updateUser(
    authUser: AuthenticatedUser,
    data: UserUpdateInput,
  ): Promise<User> {
    const user = await this.userService.findOne({
      id: authUser.id,
    });

    if (data.password && data.password.length > 0) {
      data.password = passwordHash(data.password);
    } else {
      delete data.password;
    }

    return this.userService.update({
      data: data,
      where: {
        id: user.id,
      },
    });
  }
}

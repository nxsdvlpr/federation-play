import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginInput } from './dto/login.input';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthenticatedUser } from './auth.interfaces';
import { Public } from './decorators/public.decorator';
import { UserUpdateInput } from 'generated/prisma/nestgql/user/user-update.input';
import { User } from 'generated/prisma/nestgql/user/user.model';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  @Mutation(() => LoginResponseDto)
  async login(@Args('input') input: LoginInput): Promise<LoginResponseDto> {
    const user = await this.authService.validateUser(
      input.email,
      input.password,
    );

    if (!user) {
      throw new UnauthorizedException('Email or password is incorrect');
    }

    return this.authService.login(user);
  }

  @Query(() => User)
  me(@CurrentUser() user: AuthenticatedUser): Promise<User> {
    return this.authService.currentUser(user);
  }

  @Mutation(() => User)
  updateProfile(
    @Args('data') data: UserUpdateInput,
    @CurrentUser() user: AuthenticatedUser,
  ): Promise<User> {
    return this.authService.updateUser(user, data);
  }
}

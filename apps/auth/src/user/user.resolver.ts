import 'reflect-metadata';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveReference,
} from '@nestjs/graphql';
import { UserService } from './user.service';

import { User } from 'generated/prisma/nestgql/user/user.model';
import { FindManyUserArgs } from 'generated/prisma/nestgql/user/find-many-user.args';
import { CreateOneUserArgs } from 'generated/prisma/nestgql/user/create-one-user.args';
import { UpdateOneUserArgs } from 'generated/prisma/nestgql/user/update-one-user.args';
import { DeleteOneUserArgs } from 'generated/prisma/nestgql/user/delete-one-user.args';
import { AggregateUser } from 'generated/prisma/nestgql/user/aggregate-user.output';
import { UserAggregateArgs } from 'generated/prisma/nestgql/user/user-aggregate.args';
import { DeleteManyUserArgs } from 'generated/prisma/nestgql/user/delete-many-user.args';
import { AffectedRows } from 'generated/prisma/nestgql/prisma/affected-rows.output';

@Resolver(User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { nullable: true })
  async user(
    @Args('id', { type: () => String }) id: string,
  ): Promise<User | null> {
    return this.userService.findOne({ id });
  }

  @Query(() => [User])
  async users(@Args() query: FindManyUserArgs): Promise<User[]> {
    return this.userService.findMany(query);
  }

  @Query(() => AggregateUser)
  async userAggregate(
    @Args() params: UserAggregateArgs,
  ): Promise<AggregateUser> {
    return this.userService.aggregate(params);
  }

  @Mutation(() => User)
  async createUser(@Args() params: CreateOneUserArgs): Promise<User> {
    return this.userService.create(params);
  }

  @Mutation(() => User)
  async updateUser(@Args() params: UpdateOneUserArgs): Promise<User> {
    return this.userService.update(params);
  }

  @Mutation(() => User)
  async deleteUser(@Args() params: DeleteOneUserArgs): Promise<User> {
    return this.userService.delete(params);
  }

  @Mutation(() => AffectedRows)
  async deleteUsers(@Args() params: DeleteManyUserArgs): Promise<AffectedRows> {
    return this.userService.deleteMany(params);
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: string }) {
    return this.userService.findOne({
      id: reference.id,
    });
  }
}

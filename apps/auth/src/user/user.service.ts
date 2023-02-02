import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@generated/auth/prisma/client';

import { FindManyUserArgs } from 'generated/prisma/nestgql/user/find-many-user.args';
import { UserWhereUniqueInput } from 'generated/prisma/nestgql/user/user-where-unique.input';
import { User } from 'generated/prisma/nestgql/user/user.model';
import { CreateOneUserArgs } from 'generated/prisma/nestgql/user/create-one-user.args';
import { UpdateOneUserArgs } from 'generated/prisma/nestgql/user/update-one-user.args';
import { DeleteOneUserArgs } from 'generated/prisma/nestgql/user/delete-one-user.args';
import { UserAggregateArgs } from 'generated/prisma/nestgql/user/user-aggregate.args';
import { AggregateUser } from 'generated/prisma/nestgql/user/aggregate-user.output';
import { DeleteManyUserArgs } from 'generated/prisma/nestgql/user/delete-many-user.args';
import { AffectedRows } from 'generated/prisma/nestgql/prisma/affected-rows.output';

@Injectable()
export class UserService {
  constructor(@Inject('PRISMA_CLIENT') private prisma: PrismaClient) {}

  async findOne(
    userWhereUniqueInput: UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findMany(params: FindManyUserArgs): Promise<User[]> {
    return this.prisma.user.findMany(params);
  }

  async aggregate(params: UserAggregateArgs): Promise<AggregateUser> {
    return <AggregateUser>this.prisma.user.aggregate(params);
  }

  async create(params: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create(params);
  }

  async update(params: UpdateOneUserArgs): Promise<User> {
    return this.prisma.user.update(params);
  }

  async delete(params: DeleteOneUserArgs): Promise<User> {
    return this.prisma.user.delete(params);
  }

  async deleteMany(params: DeleteManyUserArgs): Promise<AffectedRows> {
    return this.prisma.user.deleteMany(params);
  }
}

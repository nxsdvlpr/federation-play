import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@generated/post/prisma/client';

import { AggregateComment } from 'generated/prisma/nestgql/comment/aggregate-comment.output';
import { CommentAggregateArgs } from 'generated/prisma/nestgql/comment/comment-aggregate.args';
import { CommentWhereUniqueInput } from 'generated/prisma/nestgql/comment/comment-where-unique.input';
import { CreateOneCommentArgs } from 'generated/prisma/nestgql/comment/create-one-comment.args';
import { FindManyCommentArgs } from 'generated/prisma/nestgql/comment/find-many-comment.args';
import { UpdateOneCommentArgs } from 'generated/prisma/nestgql/comment/update-one-comment.args';
import { Post } from 'generated/prisma/nestgql/post/post.model';
import { Comment } from 'generated/prisma/nestgql/comment/comment.model';
import { DeleteOneCommentArgs } from 'generated/prisma/nestgql/comment/delete-one-comment.args';
import { DeleteManyCommentArgs } from 'generated/prisma/nestgql/comment/delete-many-comment.args';
import { AffectedRows } from 'generated/prisma/nestgql/prisma/affected-rows.output';

@Injectable()
export class CommentService {
  constructor(@Inject('PRISMA_CLIENT') private prisma: PrismaClient) {}

  async findPostRelation(
    commentWhereUniqueInput: CommentWhereUniqueInput,
  ): Promise<Post | null> {
    return this.prisma.comment
      .findUnique({
        where: commentWhereUniqueInput,
      })
      .feed();
  }

  async findOne(
    commentWhereUniqueInput: CommentWhereUniqueInput,
  ): Promise<Comment | null> {
    return this.prisma.comment.findUnique({
      where: commentWhereUniqueInput,
    });
  }

  async findMany(params: FindManyCommentArgs): Promise<Comment[]> {
    return this.prisma.comment.findMany(params);
  }

  async aggregate(params: CommentAggregateArgs): Promise<AggregateComment> {
    return <AggregateComment>this.prisma.comment.aggregate(params);
  }

  async create(params: CreateOneCommentArgs): Promise<Comment> {
    return this.prisma.comment.create(params);
  }

  async update(params: UpdateOneCommentArgs): Promise<Comment> {
    return this.prisma.comment.update(params);
  }

  async delete(params: DeleteOneCommentArgs): Promise<Comment> {
    return this.prisma.comment.delete(params);
  }

  async deleteMany(params: DeleteManyCommentArgs): Promise<AffectedRows> {
    return this.prisma.comment.deleteMany(params);
  }
}

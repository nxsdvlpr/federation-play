import 'reflect-metadata';
import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Mutation,
  Parent,
} from '@nestjs/graphql';
import { CommentService } from './comment.service';

import { AggregateComment } from 'generated/prisma/nestgql/comment/aggregate-comment.output';
import { CommentAggregateArgs } from 'generated/prisma/nestgql/comment/comment-aggregate.args';
import { CreateOneCommentArgs } from 'generated/prisma/nestgql/comment/create-one-comment.args';
import { FindManyCommentArgs } from 'generated/prisma/nestgql/comment/find-many-comment.args';
import { UpdateOneCommentArgs } from 'generated/prisma/nestgql/comment/update-one-comment.args';
import { Post } from 'generated/prisma/nestgql/post/post.model';
import { Comment } from 'generated/prisma/nestgql/comment/comment.model';
import { DeleteOneCommentArgs } from 'generated/prisma/nestgql/comment/delete-one-comment.args';
import { AffectedRows } from 'generated/prisma/nestgql/prisma/affected-rows.output';
import { DeleteManyCommentArgs } from 'generated/prisma/nestgql/comment/delete-many-comment.args';
import { CuidResolver } from 'graphql-scalars';

@Resolver(Comment)
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @ResolveField()
  async feed(@Parent() comment: Comment): Promise<Post | null> {
    return this.commentService.findPostRelation({ id: comment.id });
  }

  @Query(() => Comment, { nullable: true })
  async comment(
    @Args('id', { type: () => CuidResolver }) id: string,
  ): Promise<Comment | null> {
    return this.commentService.findOne({ id });
  }

  @Query(() => [Comment])
  async comments(@Args() query: FindManyCommentArgs): Promise<Comment[]> {
    return this.commentService.findMany(query);
  }

  @Query(() => AggregateComment)
  async commentAggregate(
    @Args() params: CommentAggregateArgs,
  ): Promise<AggregateComment> {
    return this.commentService.aggregate(params);
  }

  @Mutation(() => Comment)
  async createComment(@Args() params: CreateOneCommentArgs): Promise<Comment> {
    return this.commentService.create(params);
  }

  @Mutation(() => Comment)
  async updateComment(@Args() params: UpdateOneCommentArgs): Promise<Comment> {
    return this.commentService.update(params);
  }

  @Mutation(() => Comment)
  async deleteComment(@Args() params: DeleteOneCommentArgs): Promise<Comment> {
    return this.commentService.delete(params);
  }

  @Mutation(() => AffectedRows)
  async deleteComments(
    @Args() params: DeleteManyCommentArgs,
  ): Promise<AffectedRows> {
    return this.commentService.deleteMany(params);
  }
}

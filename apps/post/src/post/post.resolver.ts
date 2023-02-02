import 'reflect-metadata';
import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Mutation,
  Parent,
} from '@nestjs/graphql';
import { PostService } from './post.service';
import { FindManyCommentArgs } from 'generated/prisma/nestgql/comment/find-many-comment.args';
import { AggregatePost } from 'generated/prisma/nestgql/post/aggregate-post.output';
import { CreateOnePostArgs } from 'generated/prisma/nestgql/post/create-one-post.args';
import { FindManyPostArgs } from 'generated/prisma/nestgql/post/find-many-post.args';
import { PostAggregateArgs } from 'generated/prisma/nestgql/post/post-aggregate.args';
import { UpdateOnePostArgs } from 'generated/prisma/nestgql/post/update-one-post.args';
import { Comment } from 'generated/prisma/nestgql/comment/comment.model';
import { DeleteOnePostArgs } from 'generated/prisma/nestgql/post/delete-one-post.args';
import { DeleteManyPostArgs } from 'generated/prisma/nestgql/post/delete-many-post.args';
import { AffectedRows } from 'generated/prisma/nestgql/prisma/affected-rows.output';
import { FindManyTagArgs } from 'generated/prisma/nestgql/tag/find-many-tag.args';
import { Tag } from 'generated/prisma/nestgql/tag/tag.model';
import { User } from 'src/user/user.model';
import { Post } from 'generated/prisma/nestgql/post/post.model';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { AuthenticatedUser } from 'src/auth/auth.interfaces';
import { CuidResolver } from 'graphql-scalars';

@Resolver(Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @ResolveField()
  async comments(
    @Parent() post: Post,
    @Args() query: FindManyCommentArgs,
  ): Promise<Comment[]> {
    return this.postService.findCommentRelation(
      {
        id: post.id,
      },
      query,
    );
  }

  @ResolveField()
  async tags(
    @Parent() post: Post,
    @Args() query: FindManyTagArgs,
  ): Promise<Tag[]> {
    return this.postService.findTagRelation(
      {
        id: post.id,
      },
      query,
    );
  }

  @Query(() => Post, { nullable: true })
  async post(
    @Args('id', { type: () => CuidResolver }) id: string,
  ): Promise<Post | null> {
    return this.postService.findOne({ id });
  }

  @Query(() => [Post])
  async posts(@Args() query: FindManyPostArgs): Promise<Post[]> {
    return this.postService.findMany(query);
  }

  @Query(() => AggregatePost)
  async postAggregate(
    @Args() params: PostAggregateArgs,
  ): Promise<AggregatePost> {
    return this.postService.aggregate(params);
  }

  @Mutation(() => Post)
  async createPost(
    @CurrentUser() user: AuthenticatedUser,
    @Args() params: CreateOnePostArgs,
  ): Promise<Post> {
    return this.postService.create(user, params);
  }

  @Mutation(() => Post)
  async updatePost(@Args() params: UpdateOnePostArgs): Promise<Post> {
    return this.postService.update(params);
  }

  @Mutation(() => Post)
  async deletePost(@Args() params: DeleteOnePostArgs): Promise<Post> {
    return this.postService.delete(params);
  }

  @Mutation(() => AffectedRows)
  async deletePosts(@Args() params: DeleteManyPostArgs): Promise<AffectedRows> {
    return this.postService.deleteMany(params);
  }

  @ResolveField(() => User)
  user(@Parent() post: Post): any {
    console.log('ResolveField User 4');
    return { __typename: 'User', id: post.authorId };
  }
}

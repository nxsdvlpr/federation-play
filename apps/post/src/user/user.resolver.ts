import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { FindManyPostArgs } from 'generated/prisma/nestgql/post/find-many-post.args';
import { Post } from 'generated/prisma/nestgql/post/post.model';
import { assign } from 'lodash';
import { PostService } from '../post/post.service';
import { User } from './user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField(() => [Post])
  async posts(
    @Parent() user: User,
    @Args() query: FindManyPostArgs,
  ): Promise<Post[]> {
    if (!query.where) {
      query.where = {};
    }

    assign(query.where, { authorId: { equals: user.id } });

    console.log(query);
    return this.postService.findMany(query);
  }
}

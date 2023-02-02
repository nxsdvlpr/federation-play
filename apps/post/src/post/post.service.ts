import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@generated/post/prisma/client';

import { AggregatePost } from 'generated/prisma/nestgql/post/aggregate-post.output';
import { FindManyCommentArgs } from 'generated/prisma/nestgql/comment/find-many-comment.args';
import { CreateOnePostArgs } from 'generated/prisma/nestgql/post/create-one-post.args';
import { FindManyPostArgs } from 'generated/prisma/nestgql/post/find-many-post.args';
import { PostAggregateArgs } from 'generated/prisma/nestgql/post/post-aggregate.args';
import { PostWhereUniqueInput } from 'generated/prisma/nestgql/post/post-where-unique.input';
import { Post } from 'generated/prisma/nestgql/post/post.model';
import { UpdateOnePostArgs } from 'generated/prisma/nestgql/post/update-one-post.args';
import { Comment } from 'generated/prisma/nestgql/comment/comment.model';
import { DeleteOnePostArgs } from 'generated/prisma/nestgql/post/delete-one-post.args';
import { DeleteManyPostArgs } from 'generated/prisma/nestgql/post/delete-many-post.args';
import { AffectedRows } from 'generated/prisma/nestgql/prisma/affected-rows.output';
import { makeSlug, randomString } from '@nxs/helper';
import { FindManyTagArgs } from 'generated/prisma/nestgql/tag/find-many-tag.args';
import { Tag } from 'generated/prisma/nestgql/tag/tag.model';
import { AuthenticatedUser } from 'src/auth/auth.interfaces';

@Injectable()
export class PostService {
  constructor(@Inject('PRISMA_CLIENT') private prisma: PrismaClient) {}

  async findOne(
    postWhereUniqueInput: PostWhereUniqueInput,
  ): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async findCommentRelation(
    postWhereUniqueInput: PostWhereUniqueInput,
    params: FindManyCommentArgs,
  ): Promise<Comment[]> {
    return this.prisma.post
      .findUnique({
        where: postWhereUniqueInput,
      })
      .comments(params);
  }

  async findTagRelation(
    postWhereUniqueInput: PostWhereUniqueInput,
    params: FindManyTagArgs,
  ): Promise<Tag[]> {
    return this.prisma.post
      .findUnique({
        where: postWhereUniqueInput,
      })
      .tags(params);
  }

  async findMany(params: FindManyPostArgs): Promise<Post[]> {
    return this.prisma.post.findMany(params);
  }

  async aggregate(params: PostAggregateArgs): Promise<AggregatePost> {
    return <AggregatePost>this.prisma.post.aggregate(params);
  }

  async create(
    user: AuthenticatedUser,
    params: CreateOnePostArgs,
  ): Promise<Post> {
    params.data.authorId = user.id;
    params.data.slug = await this.slugify(params.data.title);
    return this.prisma.post.create(params);
  }

  async update(params: UpdateOnePostArgs): Promise<Post> {
    const oldPost = await this.prisma.post.findUnique({ where: params.where });

    if (oldPost && params.data.title && oldPost.title !== params.data.title) {
      params.data.slug = await this.slugify(params.data.title);
    }

    return this.prisma.post.update(params);
  }

  async delete(params: DeleteOnePostArgs): Promise<Post> {
    return this.prisma.post.delete(params);
  }

  async deleteMany(params: DeleteManyPostArgs): Promise<AffectedRows> {
    return this.prisma.post.deleteMany(params);
  }

  private async slugify(title: string): Promise<string> {
    const slug = makeSlug(title);
    const exists = await this.prisma.post.count({
      where: {
        slug: {
          startsWith: slug,
        },
      },
    });

    return exists > 0 ? `${slug}-${exists + 1}-${randomString()}` : slug;
  }
}

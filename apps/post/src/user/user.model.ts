import { ObjectType, Directive, Field } from '@nestjs/graphql';
import { Post } from 'generated/prisma/nestgql/post/post.model';
import { CuidResolver } from 'graphql-scalars';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => CuidResolver)
  @Directive('@external')
  id: string;

  @Field(() => [Post])
  posts?: Post[];
}

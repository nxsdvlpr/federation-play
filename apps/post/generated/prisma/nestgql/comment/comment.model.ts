import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Post } from '../post/post.model';

@ObjectType()
export class Comment {

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    postId!: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    createdAt!: Date;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Post, {nullable:true})
    feed?: Post | null;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Post } from '../post/post.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    createdAt!: Date;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => TagCount, {nullable:false})
    _count?: TagCount;
}

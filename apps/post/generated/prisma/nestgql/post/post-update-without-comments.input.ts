import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { TagUpdateManyWithoutPostsNestedInput } from '../tag/tag-update-many-without-posts-nested.input';

@InputType()
export class PostUpdateWithoutCommentsInput {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;

    @HideField()
    authorId?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    slug?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => [GraphQLJSON], {nullable:true})
    images?: Array<any>;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => TagUpdateManyWithoutPostsNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutPostsNestedInput;
}

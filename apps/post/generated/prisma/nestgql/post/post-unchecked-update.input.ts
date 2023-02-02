import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { CommentUncheckedUpdateManyWithoutFeedNestedInput } from '../comment/comment-unchecked-update-many-without-feed-nested.input';
import { TagUncheckedUpdateManyWithoutPostsNestedInput } from '../tag/tag-unchecked-update-many-without-posts-nested.input';

@InputType()
export class PostUncheckedUpdateInput {

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

    @Field(() => CommentUncheckedUpdateManyWithoutFeedNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutFeedNestedInput;

    @Field(() => TagUncheckedUpdateManyWithoutPostsNestedInput, {nullable:true})
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput;
}

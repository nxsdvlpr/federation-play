import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutFeedInput } from '../comment/comment-unchecked-create-nested-many-without-feed.input';
import { TagUncheckedCreateNestedManyWithoutPostsInput } from '../tag/tag-unchecked-create-nested-many-without-posts.input';

@InputType()
export class PostUncheckedCreateInput {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;

    @HideField()
    authorId!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => [GraphQLJSON], {nullable:true})
    images?: Array<any>;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => CommentUncheckedCreateNestedManyWithoutFeedInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutFeedInput;

    @Field(() => TagUncheckedCreateNestedManyWithoutPostsInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput;
}

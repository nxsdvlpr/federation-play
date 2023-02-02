import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { PostUpdateOneWithoutCommentsNestedInput } from '../post/post-update-one-without-comments-nested.input';

@InputType()
export class CommentUpdateInput {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    content?: string;

    @HideField()
    feed?: PostUpdateOneWithoutCommentsNestedInput;
}

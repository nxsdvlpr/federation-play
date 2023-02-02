import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { PostUpdateManyWithoutTagsNestedInput } from '../post/post-update-many-without-tags-nested.input';

@InputType()
export class TagUpdateInput {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => PostUpdateManyWithoutTagsNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutTagsNestedInput;
}

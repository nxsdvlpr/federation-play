import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { PostUncheckedUpdateManyWithoutTagsNestedInput } from '../post/post-unchecked-update-many-without-tags-nested.input';

@InputType()
export class TagUncheckedUpdateInput {

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

    @Field(() => PostUncheckedUpdateManyWithoutTagsNestedInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutTagsNestedInput;
}

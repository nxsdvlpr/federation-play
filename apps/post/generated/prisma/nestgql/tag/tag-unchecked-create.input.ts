import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutTagsInput } from '../post/post-unchecked-create-nested-many-without-tags.input';

@InputType()
export class TagUncheckedCreateInput {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => PostUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput;
}

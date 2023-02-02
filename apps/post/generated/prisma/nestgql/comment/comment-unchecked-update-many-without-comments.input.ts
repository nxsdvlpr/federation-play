import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CommentUncheckedUpdateManyWithoutCommentsInput {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    content?: string;
}

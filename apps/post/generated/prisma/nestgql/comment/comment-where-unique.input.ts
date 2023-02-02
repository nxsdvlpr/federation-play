import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@InputType()
export class CommentWhereUniqueInput {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;
}

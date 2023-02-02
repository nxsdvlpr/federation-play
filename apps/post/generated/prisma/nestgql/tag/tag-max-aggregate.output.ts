import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';

@ObjectType()
export class TagMaxAggregate {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    label?: string;
}

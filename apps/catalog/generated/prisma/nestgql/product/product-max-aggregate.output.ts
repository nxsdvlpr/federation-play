import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProductMaxAggregate {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    price?: number;
}

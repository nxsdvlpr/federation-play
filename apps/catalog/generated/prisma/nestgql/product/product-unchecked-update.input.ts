import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';

@InputType()
export class ProductUncheckedUpdateInput {

    @Field(() => Scalars.GraphQLCuid, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    slug?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [GraphQLJSON], {nullable:true})
    images?: Array<any>;

    @Field(() => Int, {nullable:true})
    price?: number;
}

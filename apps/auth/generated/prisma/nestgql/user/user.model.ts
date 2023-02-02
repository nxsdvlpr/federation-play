import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as NG from '@nestjs/graphql';

@ObjectType({})
@NG.Directive('@key(fields: "id")')
export class User {

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    name!: string;
}

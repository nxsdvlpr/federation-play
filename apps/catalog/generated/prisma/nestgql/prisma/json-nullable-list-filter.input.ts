import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class JsonNullableListFilter {

    @Field(() => [GraphQLJSON], {nullable:true})
    equals?: Array<any>;

    @Field(() => GraphQLJSON, {nullable:true})
    has?: any;

    @Field(() => [GraphQLJSON], {nullable:true})
    hasEvery?: Array<any>;

    @Field(() => [GraphQLJSON], {nullable:true})
    hasSome?: Array<any>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}

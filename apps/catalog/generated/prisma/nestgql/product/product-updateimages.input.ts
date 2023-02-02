import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ProductUpdateimagesInput {

    @Field(() => [GraphQLJSON], {nullable:true})
    set?: Array<any>;

    @Field(() => [GraphQLJSON], {nullable:true})
    push?: Array<any>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ProductCreateimagesInput {

    @Field(() => [GraphQLJSON], {nullable:false})
    set!: Array<any>;
}

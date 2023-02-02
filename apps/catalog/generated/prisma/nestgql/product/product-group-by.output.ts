import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ProductImageDto } from 'src/product/dto/product-image.dto';
import { Int } from '@nestjs/graphql';
import { ProductCountAggregate } from './product-count-aggregate.output';
import { ProductAvgAggregate } from './product-avg-aggregate.output';
import { ProductSumAggregate } from './product-sum-aggregate.output';
import { ProductMinAggregate } from './product-min-aggregate.output';
import { ProductMaxAggregate } from './product-max-aggregate.output';

@ObjectType()
export class ProductGroupBy {

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [ProductImageDto], {nullable:true})
    images?: Array<any>;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: ProductCountAggregate;

    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: ProductAvgAggregate;

    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: ProductSumAggregate;

    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: ProductMinAggregate;

    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: ProductMaxAggregate;
}

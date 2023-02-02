import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { ProductCountOrderByAggregateInput } from './product-count-order-by-aggregate.input';
import { ProductAvgOrderByAggregateInput } from './product-avg-order-by-aggregate.input';
import { ProductMaxOrderByAggregateInput } from './product-max-order-by-aggregate.input';
import { ProductMinOrderByAggregateInput } from './product-min-order-by-aggregate.input';
import { ProductSumOrderByAggregateInput } from './product-sum-order-by-aggregate.input';

@InputType()
export class ProductOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @HideField()
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    images?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => ProductCountOrderByAggregateInput, {nullable:true})
    _count?: ProductCountOrderByAggregateInput;

    @Field(() => ProductAvgOrderByAggregateInput, {nullable:true})
    _avg?: ProductAvgOrderByAggregateInput;

    @Field(() => ProductMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductMaxOrderByAggregateInput;

    @Field(() => ProductMinOrderByAggregateInput, {nullable:true})
    _min?: ProductMinOrderByAggregateInput;

    @Field(() => ProductSumOrderByAggregateInput, {nullable:true})
    _sum?: ProductSumOrderByAggregateInput;
}

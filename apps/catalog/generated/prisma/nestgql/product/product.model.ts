import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { ProductImageDto } from 'src/product/dto/product-image.dto';
import { Int } from '@nestjs/graphql';
import * as NG from '@nestjs/graphql';

@ObjectType({})
@NG.Directive('@key(fields: "id")')
export class Product {

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    createdAt!: Date;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [ProductImageDto], {nullable:true})
    images!: Array<any>;

    @Field(() => Int, {nullable:false,defaultValue:0})
    price!: number;
}

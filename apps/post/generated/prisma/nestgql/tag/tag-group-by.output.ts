import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { TagCountAggregate } from './tag-count-aggregate.output';
import { TagMinAggregate } from './tag-min-aggregate.output';
import { TagMaxAggregate } from './tag-max-aggregate.output';

@ObjectType()
export class TagGroupBy {

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    label!: string;

    @Field(() => TagCountAggregate, {nullable:true})
    _count?: TagCountAggregate;

    @Field(() => TagMinAggregate, {nullable:true})
    _min?: TagMinAggregate;

    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: TagMaxAggregate;
}

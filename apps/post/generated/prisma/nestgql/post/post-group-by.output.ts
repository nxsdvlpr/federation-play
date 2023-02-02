import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PostImageDto } from 'src/post/dto/post-image.dto';
import { Int } from '@nestjs/graphql';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostAvgAggregate } from './post-avg-aggregate.output';
import { PostSumAggregate } from './post-sum-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';

@ObjectType()
export class PostGroupBy {

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    authorId!: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => [PostImageDto], {nullable:true})
    images?: Array<any>;

    @Field(() => Int, {nullable:false})
    viewCount!: number;

    @Field(() => PostCountAggregate, {nullable:true})
    _count?: PostCountAggregate;

    @Field(() => PostAvgAggregate, {nullable:true})
    _avg?: PostAvgAggregate;

    @Field(() => PostSumAggregate, {nullable:true})
    _sum?: PostSumAggregate;

    @Field(() => PostMinAggregate, {nullable:true})
    _min?: PostMinAggregate;

    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: PostMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';

@ObjectType()
export class CommentGroupBy {

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    postId!: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: CommentCountAggregate;

    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: CommentMinAggregate;

    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: CommentMaxAggregate;
}

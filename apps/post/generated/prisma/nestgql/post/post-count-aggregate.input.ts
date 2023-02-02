import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class PostCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @HideField()
    authorId?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;

    @HideField()
    slug?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    content?: true;

    @Field(() => Boolean, {nullable:true})
    published?: true;

    @Field(() => Boolean, {nullable:true})
    images?: true;

    @Field(() => Boolean, {nullable:true})
    viewCount?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

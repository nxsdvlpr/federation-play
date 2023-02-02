import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutFeedInput } from './comment-create-without-feed.input';

@InputType()
export class CommentCreateOrConnectWithoutFeedInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutFeedInput, {nullable:false})
    @Type(() => CommentCreateWithoutFeedInput)
    create!: CommentCreateWithoutFeedInput;
}

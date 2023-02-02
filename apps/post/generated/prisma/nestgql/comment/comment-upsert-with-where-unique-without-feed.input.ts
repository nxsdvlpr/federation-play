import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutFeedInput } from './comment-update-without-feed.input';
import { CommentCreateWithoutFeedInput } from './comment-create-without-feed.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutFeedInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutFeedInput, {nullable:false})
    @Type(() => CommentUpdateWithoutFeedInput)
    update!: CommentUpdateWithoutFeedInput;

    @Field(() => CommentCreateWithoutFeedInput, {nullable:false})
    @Type(() => CommentCreateWithoutFeedInput)
    create!: CommentCreateWithoutFeedInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutFeedInput } from './comment-create-without-feed.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutFeedInput } from './comment-create-or-connect-without-feed.input';
import { CommentCreateManyFeedInputEnvelope } from './comment-create-many-feed-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutFeedInput {

    @Field(() => [CommentCreateWithoutFeedInput], {nullable:true})
    @Type(() => CommentCreateWithoutFeedInput)
    create?: Array<CommentCreateWithoutFeedInput>;

    @Field(() => [CommentCreateOrConnectWithoutFeedInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutFeedInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutFeedInput>;

    @Field(() => CommentCreateManyFeedInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyFeedInputEnvelope)
    createMany?: CommentCreateManyFeedInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<CommentWhereUniqueInput>;
}

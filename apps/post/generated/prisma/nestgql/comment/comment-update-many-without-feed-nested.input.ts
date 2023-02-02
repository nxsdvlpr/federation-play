import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutFeedInput } from './comment-create-without-feed.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutFeedInput } from './comment-create-or-connect-without-feed.input';
import { CommentUpsertWithWhereUniqueWithoutFeedInput } from './comment-upsert-with-where-unique-without-feed.input';
import { CommentCreateManyFeedInputEnvelope } from './comment-create-many-feed-input-envelope.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutFeedInput } from './comment-update-with-where-unique-without-feed.input';
import { CommentUpdateManyWithWhereWithoutFeedInput } from './comment-update-many-with-where-without-feed.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUpdateManyWithoutFeedNestedInput {

    @Field(() => [CommentCreateWithoutFeedInput], {nullable:true})
    @Type(() => CommentCreateWithoutFeedInput)
    create?: Array<CommentCreateWithoutFeedInput>;

    @Field(() => [CommentCreateOrConnectWithoutFeedInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutFeedInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutFeedInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutFeedInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutFeedInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutFeedInput>;

    @Field(() => CommentCreateManyFeedInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyFeedInputEnvelope)
    createMany?: CommentCreateManyFeedInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutFeedInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutFeedInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutFeedInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutFeedInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutFeedInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutFeedInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

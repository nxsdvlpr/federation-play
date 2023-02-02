import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyFeedInput } from './comment-create-many-feed.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyFeedInputEnvelope {

    @Field(() => [CommentCreateManyFeedInput], {nullable:false})
    @Type(() => CommentCreateManyFeedInput)
    data!: Array<CommentCreateManyFeedInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

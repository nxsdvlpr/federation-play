import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutPostsInput } from './tag-update-without-posts.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutPostsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutPostsInput, {nullable:false})
    @Type(() => TagUpdateWithoutPostsInput)
    data!: TagUpdateWithoutPostsInput;
}

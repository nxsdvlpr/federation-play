import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutPostsInput } from './tag-create-without-posts.input';

@InputType()
export class TagCreateOrConnectWithoutPostsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: TagWhereUniqueInput;

    @Field(() => TagCreateWithoutPostsInput, {nullable:false})
    @Type(() => TagCreateWithoutPostsInput)
    create!: TagCreateWithoutPostsInput;
}

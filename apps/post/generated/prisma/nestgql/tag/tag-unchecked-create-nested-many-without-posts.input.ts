import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutPostsInput } from './tag-create-without-posts.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutPostsInput } from './tag-create-or-connect-without-posts.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutPostsInput {

    @Field(() => [TagCreateWithoutPostsInput], {nullable:true})
    @Type(() => TagCreateWithoutPostsInput)
    create?: Array<TagCreateWithoutPostsInput>;

    @Field(() => [TagCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutPostsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<TagWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutPostsInput } from './tag-create-without-posts.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutPostsInput } from './tag-create-or-connect-without-posts.input';
import { TagUpsertWithWhereUniqueWithoutPostsInput } from './tag-upsert-with-where-unique-without-posts.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutPostsInput } from './tag-update-with-where-unique-without-posts.input';
import { TagUpdateManyWithWhereWithoutPostsInput } from './tag-update-many-with-where-without-posts.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUncheckedUpdateManyWithoutPostsNestedInput {

    @Field(() => [TagCreateWithoutPostsInput], {nullable:true})
    @Type(() => TagCreateWithoutPostsInput)
    create?: Array<TagCreateWithoutPostsInput>;

    @Field(() => [TagCreateOrConnectWithoutPostsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutPostsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutPostsInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutPostsInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutPostsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutPostsInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutPostsInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutPostsInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutPostsInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutPostsInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutPostsInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}

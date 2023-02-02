import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TagScalarWhereInput {

    @Field(() => [TagScalarWhereInput], {nullable:true})
    AND?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    OR?: Array<TagScalarWhereInput>;

    @Field(() => [TagScalarWhereInput], {nullable:true})
    NOT?: Array<TagScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    label?: StringFilter;
}

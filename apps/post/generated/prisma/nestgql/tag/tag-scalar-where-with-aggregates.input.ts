import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TagScalarWhereWithAggregatesInput {

    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    label?: StringWithAggregatesFilter;
}

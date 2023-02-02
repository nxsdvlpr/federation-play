import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { NestedSIDFilter } from './nested.sid.filter';
import { SID } from './sid.scalar';

@InputType()
export class SIDFilter {
  @Field(() => SID, { nullable: true })
  equals?: number;

  @Field(() => [SID], { nullable: true })
  in?: Array<number>;

  @Field(() => [SID], { nullable: true })
  notIn?: Array<number>;

  @Field(() => SID, { nullable: true })
  lt?: number;

  @Field(() => SID, { nullable: true })
  lte?: number;

  @Field(() => SID, { nullable: true })
  gt?: number;

  @Field(() => SID, { nullable: true })
  gte?: number;

  @Field(() => NestedSIDFilter, { nullable: true })
  not?: NestedSIDFilter;
}

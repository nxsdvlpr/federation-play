import { ObjectType, Field } from '@nestjs/graphql';
import { CuidResolver } from 'graphql-scalars';

@ObjectType()
export class ProductCategory {
  @Field(() => CuidResolver)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  price: number;
}

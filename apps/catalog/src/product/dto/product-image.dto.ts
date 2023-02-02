import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('ProductImage')
export class ProductImageDto {
  @Field(() => String)
  large: string;

  @Field(() => String)
  medium: string;
}
